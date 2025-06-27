from flask import Flask, request, jsonify, Response
from flask_cors import CORS
from prometheus_client import Counter, Histogram, Gauge, generate_latest, CONTENT_TYPE_LATEST
import os
import json
import time
import logging
from datetime import datetime, timedelta
from functools import wraps
from werkzeug.exceptions import BadRequest

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = Flask(__name__)
CORS(app)

REQUEST_COUNT = Counter(
    'portfolio_requests_total', 
    'Total HTTP requests', 
    ['method', 'endpoint', 'status_code']
)
REQUEST_DURATION = Histogram(
    'portfolio_request_duration_seconds', 
    'HTTP request duration in seconds',
    ['method', 'endpoint']
)
PAGE_VISITS = Counter(
    'portfolio_page_visits_total', 
    'Total visits to each section', 
    ['section']
)
PAGE_LOAD_DURATION = Histogram(
    'portfolio_page_load_duration_seconds', 
    'Page load duration in seconds', 
    ['section']
)
ACTIVE_CONNECTIONS = Gauge(
    'portfolio_active_connections', 
    'Number of active connections'
)
ERROR_COUNT = Counter(
    'portfolio_errors_total', 
    'Total errors by type', 
    ['error_type']
)

DATA_DIR = os.path.join(os.path.dirname(__file__), 'data')
CONTACTS_FILE = os.path.join(DATA_DIR, 'contacts.json')
ANALYTICS_FILE = os.path.join(DATA_DIR, 'analytics.json')
HEALTH_FILE = os.path.join(DATA_DIR, 'health.json')

os.makedirs(DATA_DIR, exist_ok=True)

def init_data_files():
    files = {
        CONTACTS_FILE: {"messages": []},
        ANALYTICS_FILE: {"visits": [], "performance": []},
        HEALTH_FILE: {"status": "healthy", "last_check": datetime.now().isoformat()}
    }
    for file_path, default_data in files.items():
        if not os.path.exists(file_path):
            with open(file_path, 'w') as f:
                json.dump(default_data, f, indent=2)

init_data_files()

@app.before_request
def before_request():
    request.start_time = time.time()
    ACTIVE_CONNECTIONS.inc()

@app.after_request
def after_request(response):
    try:
        duration = time.time() - request.start_time
        REQUEST_COUNT.labels(
            method=request.method,
            endpoint=request.endpoint or request.path,
            status_code=response.status_code
        ).inc()
        REQUEST_DURATION.labels(
            method=request.method,
            endpoint=request.endpoint or request.path
        ).observe(duration)
        ACTIVE_CONNECTIONS.dec()
    except Exception as e:
        ERROR_COUNT.labels(error_type=type(e).__name__).inc()
        logger.error(f"Error in after_request: {e}")
    return response

@app.errorhandler(404)
def not_found(error):
    ERROR_COUNT.labels(error_type="not_found").inc()
    return jsonify({"error": "Endpoint not found", "status": 404}), 404

@app.errorhandler(500)
def internal_error(error):
    ERROR_COUNT.labels(error_type="internal_error").inc()
    return jsonify({"error": "Internal server error", "status": 500}), 500

def validate_json(required_fields=None):
    def decorator(f):
        @wraps(f)
        def decorated_function(*args, **kwargs):
            if not request.is_json:
                return jsonify({"error": "Request must be JSON"}), 400
            data = request.get_json()
            if not data:
                return jsonify({"error": "No JSON data provided"}), 400
            if required_fields:
                missing_fields = [field for field in required_fields if field not in data or not data[field]]
                if missing_fields:
                    return jsonify({"error": f"Missing required fields: {', '.join(missing_fields)}"}), 400
            return f(*args, **kwargs)
        return decorated_function
    return decorator

@app.route('/', methods=['GET'])
def root():
    return jsonify({
        "message": "Portfolio Backend API (Flask)",
        "version": "1.0.0",
        "endpoints": {
            "contact": "/api/contact",
            "analytics": "/api/analytics/*",
            "health": "/api/health",
            "testing": "/api/test/*",
            "metrics": "/metrics"
        },
        "timestamp": datetime.now().isoformat()
    })

@app.route('/api/contact', methods=['POST'])
@validate_json(['name', 'email', 'message'])
def create_contact():
    try:
        data = request.get_json()
        with open(CONTACTS_FILE, 'r') as f:
            file_data = json.load(f)
        contact_data = {
            "name": data['name'],
            "email": data['email'],
            "message": data['message'],
            "subject": data.get('subject'),
            "timestamp": datetime.now().isoformat(),
            "ip_address": request.remote_addr,
            "user_agent": request.headers.get('User-Agent', 'unknown')
        }
        file_data["messages"].append(contact_data)
        with open(CONTACTS_FILE, 'w') as f:
            json.dump(file_data, f, indent=2)
        logger.info(f"New contact message from {data['email']}")
        return jsonify({"success": True, "message": "Contact message stored successfully"})
    except Exception as e:
        ERROR_COUNT.labels(error_type="contact_error").inc()
        logger.error(f"Error storing contact: {e}")
        return jsonify({"error": "Failed to store contact message"}), 500

@app.route('/api/contact', methods=['GET'])
def get_contacts():
    try:
        limit = request.args.get('limit', type=int)
        offset = request.args.get('offset', default=0, type=int)
        with open(CONTACTS_FILE, 'r') as f:
            data = json.load(f)
        messages = data.get("messages", [])
        total = len(messages)
        if limit:
            messages = messages[offset:offset + limit]
        return jsonify({
            "messages": messages,
            "total": total,
            "limit": limit,
            "offset": offset
        })
    except Exception as e:
        logger.error(f"Error reading contacts: {e}")
        return jsonify({"messages": [], "total": 0})

@app.route('/api/contact/<int:contact_id>', methods=['DELETE'])
def delete_contact(contact_id):
    try:
        with open(CONTACTS_FILE, 'r') as f:
            data = json.load(f)
        messages = data.get("messages", [])
        if 0 <= contact_id < len(messages):
            deleted_message = messages.pop(contact_id)
            with open(CONTACTS_FILE, 'w') as f:
                json.dump(data, f, indent=2)
            return jsonify({"success": True, "deleted": deleted_message})
        else:
            return jsonify({"error": "Contact message not found"}), 404
    except Exception as e:
        logger.error(f"Error deleting contact: {e}")
        return jsonify({"error": "Failed to delete contact message"}), 500

@app.route('/api/analytics/visit', methods=['POST'])
@validate_json(['section'])
def track_visit():
    try:
        data = request.get_json()
        section = data['section']
        PAGE_VISITS.labels(section=section).inc()
        with open(ANALYTICS_FILE, 'r') as f:
            file_data = json.load(f)
        visit_data = {
            "section": section,
            "timestamp": data.get('timestamp', datetime.now().isoformat()),
            "ip_address": request.remote_addr,
            "user_agent": request.headers.get('User-Agent', 'unknown')
        }
        file_data["visits"].append(visit_data)
        with open(ANALYTICS_FILE, 'w') as f:
            json.dump(file_data, f, indent=2)
        return jsonify({"success": True, "message": "Visit tracked successfully"})
    except Exception as e:
        ERROR_COUNT.labels(error_type="analytics_error").inc()
        logger.error(f"Error tracking visit: {e}")
        return jsonify({"error": "Failed to track visit"}), 500

@app.route('/api/analytics/performance', methods=['POST'])
@validate_json(['section', 'duration'])
def track_performance():
    try:
        data = request.get_json()
        section = data['section']
        duration = float(data['duration'])
        PAGE_LOAD_DURATION.labels(section=section).observe(duration)
        with open(ANALYTICS_FILE, 'r') as f:
            file_data = json.load(f)
        perf_data = {
            "section": section,
            "duration": duration,
            "performance_metrics": data.get('performance_metrics', {}),
            "timestamp": datetime.now().isoformat()
        }
        file_data["performance"].append(perf_data)
        with open(ANALYTICS_FILE, 'w') as f:
            json.dump(file_data, f, indent=2)
        return jsonify({"success": True, "message": "Performance data tracked successfully"})
    except (ValueError, TypeError) as e:
        return jsonify({"error": "Invalid duration value"}), 400
    except Exception as e:
        ERROR_COUNT.labels(error_type="performance_error").inc()
        logger.error(f"Error tracking performance: {e}")
        return jsonify({"error": "Failed to track performance"}), 500

@app.route('/api/analytics/summary', methods=['GET'])
def get_analytics_summary():
    try:
        with open(ANALYTICS_FILE, 'r') as f:
            data = json.load(f)
        visits = data.get("visits", [])
        performance = data.get("performance", [])
        total_visits = len(visits)
        sections_visited = len(set(visit["section"] for visit in visits))
        avg_duration = sum(perf["duration"] for perf in performance) / len(performance) if performance else 0
        return jsonify({
            "total_visits": total_visits,
            "sections_visited": sections_visited,
            "avg_duration": avg_duration
        })
    except Exception as e:
        logger.error(f"Error reading analytics summary: {e}")
        return jsonify({})

@app.route('/api/health', methods=['GET'])
def health_check():
    try:
        with open(HEALTH_FILE, 'r') as f:
            health_data = json.load(f)
        health_data["last_check"] = datetime.now().isoformat()
        with open(HEALTH_FILE, 'w') as f:
            json.dump(health_data, f, indent=2)
        return jsonify(health_data)
    except Exception as e:
        logger.error(f"Error reading health status: {e}")
        return jsonify({"status": "unknown", "last_check": None})

@app.route('/api/test/ping', methods=['GET'])
def test_ping():
    return jsonify({"message": "pong"})

@app.route('/api/test/echo', methods=['POST'])
def test_echo():
    return jsonify({"echo": request.get_json()})

@app.route('/metrics', methods=['GET'])
def metrics():
    try:
        return Response(generate_latest(), mimetype=CONTENT_TYPE_LATEST)
    except Exception as e:
        logger.error(f"Error generating metrics: {e}")
        return jsonify({"error": "Failed to generate metrics"}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=int(os.environ.get('PORT', 5000)), debug=True)

