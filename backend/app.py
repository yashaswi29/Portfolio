from flask import Flask, request, jsonify
from flask_cors import CORS
from prometheus_client import start_http_server, Summary, Counter, CONTENT_TYPE_LATEST, generate_latest
import os
import json
from datetime import datetime

page_views = Counter('page_views', 'Number of page views', ['page_name'])

app = Flask(__name__)
CORS(app)

DATA_FILE = os.path.join(os.path.dirname(__file__), 'data.json')

if not os.path.exists(DATA_FILE):
    with open(DATA_FILE, 'w') as f:
        json.dump({
            "messages": []
        }, f)

@app.route('/api/contact', methods=['POST'])
def contact():
    data = request.json
    name = data.get('name', '')
    email = data.get('email', '')
    message = data.get('message', '')
    
    if not name or not email or not message:
        return jsonify({"success": False, "error": "All fields are required"}), 400
    
    try:
        with open(DATA_FILE, 'r') as f:
            file_data = json.load(f)
    except:
        file_data = {"messages": []}
    
    file_data["messages"].append({
        "name": name,
        "email": email,
        "message": message,
        "timestamp": datetime.now().isoformat()
    })
    
    # Save updated data
    with open(DATA_FILE, 'w') as f:
        json.dump(file_data, f, indent=2)
    
    return jsonify({"success": True})

@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({"status": "healthy"})

@app.route('/api/pageview/<page_name>', methods=['GET'])
def trackpage_view(page_name):
    page_views.labels(page_name).inc()
    return jsonify({"success": True, "page_name": page_name})

@app.route('/metrics')
def metrics():
    return generate_latest(), 200, {'Content-Type': CONTENT_TYPE_LATEST}

if __name__ == '__main__':
    app.run(debug=True, port=5000)