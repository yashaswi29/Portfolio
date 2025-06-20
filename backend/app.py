from flask import Flask, request, jsonify
from flask_cors import CORS
from prometheus_client import Counter, Histogram, generate_latest, CONTENT_TYPE_LATEST
import os
import json
from datetime import datetime

app = Flask(__name__)
CORS(app)

page_visits = Counter(
    'portfolio_page_visits_total', 'Total visits to each section', ['section']
)

page_load_duration = Histogram(
    'portfolio_page_load_duration_seconds', 'Page load duration in seconds', ['section']
)

# DATA_FILE = os.path.join(os.path.dirname(__file__), 'data.json')
# if not os.path.exists(DATA_FILE):
#     with open(DATA_FILE, 'w') as f:
#         json.dump({"messages": []}, f)

# @app.route('/api/contact', methods=['POST'])
# def contact():
#     data = request.json
#     name = data.get('name', '')
#     email = data.get('email', '')
#     message = data.get('message', '')

#     if not name or not email or not message:
#         return jsonify({"success": False, "error": "All fields are required"}), 400

#     # Load and append new contact message
#     try:
#         with open(DATA_FILE, 'r') as f:
#             file_data = json.load(f)
#     except:
#         file_data = {"messages": []}

    # file_data["messages"].append({
    #     "name": name,
    #     "email": email,
    #     "message": message,
    #     "timestamp": datetime.now().isoformat()
    # })

    # with open(DATA_FILE, 'w') as f:
    #     json.dump(file_data, f, indent=2)

    # return jsonify({"success": True})

@app.route('/api/track/visit', methods=['POST'])
def track_visit():
    data = request.json
    section = data.get('section', 'unknown')
    page_visits.labels(section=section).inc()
    return jsonify({"success": True})

@app.route('/api/track/load', methods=['POST'])
def track_load():
    data = request.json
    section = data.get('section', 'unknown')
    duration = data.get('duration', 0)
    try:
        duration = float(duration)
        page_load_duration.labels(section=section).observe(duration)
    except ValueError:
        return jsonify({"success": False, "error": "Invalid duration"}), 400
    return jsonify({"success": True})

@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({"status": "healthy"})

@app.route('/metrics', methods=['GET'])
def metrics():
    return generate_latest(), 200, {'Content-Type': CONTENT_TYPE_LATEST}

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
