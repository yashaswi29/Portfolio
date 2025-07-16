from flask import Flask, request, jsonify, Response
from flask_cors import CORS
from prometheus_client import Counter, Histogram, Gauge, generate_latest, CONTENT_TYPE_LATEST
import os, json, time, logging
from datetime import datetime
from functools import wraps

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = Flask(__name__)
CORS(app)


REQUEST_COUNT = Counter('requests_total', 'Total HTTP requests', ['method', 'endpoint', 'status_code'])
REQUEST_DURATION = Histogram('request_duration_seconds', 'HTTP request duration', ['method', 'endpoint'])
PAGE_VISITS = Counter('page_visits_total', 'Visits by section', ['section'])
PAGE_LOAD_DURATION = Histogram('page_load_duration_seconds', 'Page load duration', ['section'])
ACTIVE_CONNECTIONS = Gauge('active_connections', 'Active HTTP connections')
ERROR_COUNT = Counter('errors_total', 'Total errors by type', ['error_type'])


DATA_DIR = os.path.join(os.path.dirname(__file__), 'data')
ANALYTICS_FILE = os.path.join(DATA_DIR, 'analytics.json')
HEALTH_FILE = os.path.join(DATA_DIR, 'health.json')
os.makedirs(DATA_DIR, exist_ok=True)

def init_files():
    files = {
        ANALYTICS_FILE: {"visits": [], "performance": []},
        HEALTH_FILE: {"status": "healthy", "last_check": datetime.now().isoformat()}
    }
    for path, data in files.items():
        if not os.path.exists(path):
            with open(path, 'w') as f:
                json.dump(data, f, indent=2)

init_files()


@app.before_request
def before_request():
    request.start_time = time.time()
    ACTIVE_CONNECTIONS.inc()

@app.after_request
def after_request(response):
    try:
        duration = time.time() - request.start_time
        REQUEST_COUNT.labels(request.method, request.path, response.status_code).inc()
        REQUEST_DURATION.labels(request.method, request.path).observe(duration)
        ACTIVE_CONNECTIONS.dec()
    except Exception as e:
        ERROR_COUNT.labels(error_type=type(e).__name__).inc()
        logger.error(f"after_request error: {e}")
    return response

@app.errorhandler(404)
def handle_404(error):
    ERROR_COUNT.labels("not_found").inc()
    return jsonify({"error": "Not found"}), 404

@app.errorhandler(500)
def handle_500(error):
    ERROR_COUNT.labels("internal_error").inc()
    return jsonify({"error": "Internal server error"}), 500

def validate_json(fields):
    def wrapper(f):
        @wraps(f)
        def inner(*args, **kwargs):
            if not request.is_json:
                return jsonify({"error": "JSON required"}), 400
            data = request.get_json()
            missing = [field for field in fields if field not in data]
            if missing:
                return jsonify({"error": f"Missing fields: {', '.join(missing)}"}), 400
            return f(*args, **kwargs)
        return inner
    return wrapper

# Routes
@app.route('/', methods=['GET'])
def index():
    return jsonify({
        "message": "Portfolio Analytics Backend",
        "endpoints": ["/api/analytics/visit", "/api/analytics/performance", "/api/analytics/summary", "/metrics"]
    })

@app.route('/api/analytics/visit', methods=['POST'])
@validate_json(['section'])
def visit():
    try:
        section = request.json['section']
        PAGE_VISITS.labels(section=section).inc()
        visit = {
            "section": section,
            "timestamp": datetime.now().isoformat(),
            "ip": request.remote_addr,
            "user_agent": request.headers.get("User-Agent", "unknown")
        }
        with open(ANALYTICS_FILE, 'r+') as f:
            data = json.load(f)
            data["visits"].append(visit)
            f.seek(0), json.dump(data, f, indent=2), f.truncate()
        return jsonify({"message": "Visit tracked"}), 200
    except Exception as e:
        ERROR_COUNT.labels("visit_error").inc()
        logger.error(f"Visit tracking failed: {e}")
        return jsonify({"error": "Tracking failed"}), 500

@app.route('/api/analytics/performance', methods=['POST'])
@validate_json(['section', 'duration'])
def performance():
    try:
        section = request.json['section']
        duration = float(request.json['duration'])
        PAGE_LOAD_DURATION.labels(section=section).observe(duration)
        entry = {
            "section": section,
            "duration": duration,
            "timestamp": datetime.now().isoformat()
        }
        with open(ANALYTICS_FILE, 'r+') as f:
            data = json.load(f)
            data["performance"].append(entry)
            f.seek(0), json.dump(data, f, indent=2), f.truncate()
        return jsonify({"message": "Performance tracked"}), 200
    except Exception as e:
        ERROR_COUNT.labels("perf_error").inc()
        logger.error(f"Performance tracking failed: {e}")
        return jsonify({"error": "Tracking failed"}), 500

@app.route('/api/analytics/summary', methods=['GET'])
def summary():
    try:
        with open(ANALYTICS_FILE) as f:
            data = json.load(f)
        visits = data["visits"]
        performance = data["performance"]
        summary = {
            "total_visits": len(visits),
            "sections_visited": list(set(v["section"] for v in visits)),
            "avg_duration": round(sum(p["duration"] for p in performance) / len(performance), 2) if performance else 0
        }
        return jsonify(summary)
    except Exception as e:
        logger.error(f"Summary error: {e}")
        return jsonify({"error": "Summary failed"}), 500

@app.route('/metrics')
def metrics():
    return Response(generate_latest(), mimetype=CONTENT_TYPE_LATEST)

@app.route('/api/health')
def health():
    try:
        with open(HEALTH_FILE, 'r+') as f:
            health = json.load(f)
            health["last_check"] = datetime.now().isoformat()
            f.seek(0), json.dump(health, f, indent=2), f.truncate()
        return jsonify(health)
    except Exception as e:
        return jsonify({"status": "unknown"}), 500

@app.route('/api/test/echo', methods=['POST'])
def echo():
    return jsonify(request.get_json())

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=7001, debug=True)
