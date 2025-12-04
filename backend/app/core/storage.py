import json
import os
import logging
from datetime import datetime
from typing import Dict, Any

logger = logging.getLogger(__name__)

DATA_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(__file__))), 'data')
ANALYTICS_FILE = os.path.join(DATA_DIR, 'analytics.json')
HEALTH_FILE = os.path.join(DATA_DIR, 'health.json')

def init_files():
    os.makedirs(DATA_DIR, exist_ok=True)
    files = {
        ANALYTICS_FILE: {"visits": [], "performance": [], "events": []},
        HEALTH_FILE: {"status": "healthy", "last_check": datetime.now().isoformat()}
    }
    for path, data in files.items():
        if not os.path.exists(path):
            try:
                with open(path, 'w') as f:
                    json.dump(data, f, indent=2)
            except Exception as e:
                logger.error(f"Failed to initialize file {path}: {e}")

def read_json(file_path: str) -> Dict[str, Any]:
    try:
        with open(file_path, 'r') as f:
            return json.load(f)
    except Exception as e:
        logger.error(f"Failed to read {file_path}: {e}")
        return {}

def write_json(file_path: str, data: Dict[str, Any]):
    try:
        with open(file_path, 'r+') as f:
            f.seek(0)
            json.dump(data, f, indent=2)
            f.truncate()
    except Exception as e:
        logger.error(f"Failed to write to {file_path}: {e}")

def append_to_analytics(key: str, item: Dict[str, Any]):
    try:
        with open(ANALYTICS_FILE, 'r+') as f:
            data = json.load(f)
            if key not in data:
                data[key] = []
            data[key].append(item)
            f.seek(0)
            json.dump(data, f, indent=2)
            f.truncate()
    except Exception as e:
        logger.error(f"Failed to append to analytics {key}: {e}")

def update_health():
    try:
        with open(HEALTH_FILE, 'r+') as f:
            data = json.load(f)
            data["last_check"] = datetime.now().isoformat()
            f.seek(0)
            json.dump(data, f, indent=2)
            f.truncate()
            return data
    except Exception as e:
        logger.error(f"Failed to update health: {e}")
        return {"status": "unknown", "last_check": datetime.now().isoformat()}
