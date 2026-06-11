import os
import json
from datetime import datetime
from typing import Any, Dict

DATA_DIR = os.path.join(os.getcwd(), "data")
SESSIONS_DIR = os.path.join(DATA_DIR, "sessions")
HEALTH_FILE = os.path.join(DATA_DIR, "health.json")
CONTACTS_FILE = os.path.join(DATA_DIR, "contacts.json")


def save_contact_message(message: Dict[str, Any]) -> None:
    """Append a contact-form submission to data/contacts.json."""
    os.makedirs(DATA_DIR, exist_ok=True)
    data = _read_json(CONTACTS_FILE)
    if not isinstance(data, dict) or not isinstance(data.get("messages"), list):
        data = {"messages": []}
    data["messages"].append(message)
    _write_json(CONTACTS_FILE, data)


def _read_json(path: str) -> Any:
    try:
        with open(path, "r", encoding="utf-8") as f:
            return json.load(f)
    except FileNotFoundError:
        return None


def _write_json(path: str, data: Any) -> None:
    temp_path = f"{path}.tmp"
    with open(temp_path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    os.replace(temp_path, path)


def init_files() -> None:
    os.makedirs(DATA_DIR, exist_ok=True)
    os.makedirs(SESSIONS_DIR, exist_ok=True)

    if not os.path.exists(HEALTH_FILE):
        _write_json(HEALTH_FILE, {"status": "healthy", "checked_at": datetime.now().isoformat()})


def update_health() -> Dict[str, str]:
    payload = {"status": "healthy", "checked_at": datetime.now().isoformat()}
    _write_json(HEALTH_FILE, payload)
    return payload


def save_session_event(session_id: str, event: Dict[str, Any]) -> None:
    """
    Saves an event to a session-specific JSON file.
    File path: data/sessions/<session_id>.json
    Structure:
    {
        "session_id": "...",
        "start_time": "...",
        "last_updated": "...",
        "events": [ ... ]
    }
    """
    if not session_id:
        return  # explicit session_id required
    safe_session_id = "".join(c for c in session_id if c.isalnum() or c in "-_")
    path = os.path.join(SESSIONS_DIR, f"{safe_session_id}.json")

    data = _read_json(path)
    if data is None:
        data = {
            "session_id": safe_session_id,
            "start_time": event.get("timestamp", datetime.now().isoformat()),
            "last_updated": datetime.now().isoformat(),
            "events": []
        }
    
    data["events"].append(event)
    data["last_updated"] = datetime.now().isoformat()
    
    _write_json(path, data)
