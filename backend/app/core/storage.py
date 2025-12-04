import os
import json
from datetime import datetime, date
from typing import Any, Dict

DATA_DIR = os.path.join(os.getcwd(), "data")
DAILY_DIR = os.path.join(DATA_DIR, "daily")
ANALYTICS_FILE = os.path.join(DATA_DIR, "analytics.json")
HEALTH_FILE = os.path.join(DATA_DIR, "health.json")


def _read_json(path: str) -> Any:
    try:
        with open(path, "r", encoding="utf-8") as f:
            return json.load(f)
    except FileNotFoundError:
        return None


def _write_json(path: str, data: Any) -> None:
    with open(path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)


def init_files() -> None:
    os.makedirs(DATA_DIR, exist_ok=True)
    os.makedirs(DAILY_DIR, exist_ok=True)

    if not os.path.exists(ANALYTICS_FILE):
        initial = {"visits": [], "performance": [], "events": []}
        _write_json(ANALYTICS_FILE, initial)

    if not os.path.exists(HEALTH_FILE):
        _write_json(HEALTH_FILE, {"status": "healthy", "checked_at": datetime.now().isoformat()})


def update_health() -> Dict[str, str]:
    payload = {"status": "healthy", "checked_at": datetime.now().isoformat()}
    _write_json(HEALTH_FILE, payload)
    return payload


def append_analytics(kind: str, obj: Dict[str, Any]) -> None:
    data = _read_json(ANALYTICS_FILE) or {"visits": [], "performance": [], "events": []}
    if kind not in data:
        data[kind] = []
    data[kind].append(obj)
    _write_json(ANALYTICS_FILE, data)


def _daily_filepath(target_date: date) -> str:
    return os.path.join(DAILY_DIR, f"events_{target_date.isoformat()}.json")


def append_daily_event(event: Dict[str, Any], target_date: date | None = None) -> None:
    """
    Append an event to the per-day JSON file under `data/daily/events_YYYY-MM-DD.json`.
    The file will be created if it does not exist and will follow the schema:
    {"date": "YYYY-MM-DD", "events": [ ... ]}
    """
    if target_date is None:
        target_date = date.today()

    path = _daily_filepath(target_date)

    content = _read_json(path)
    if content is None:
        content = {"date": target_date.isoformat(), "events": []}

    content.setdefault("events", []).append(event)
    # Ensure parent directory exists (be robust if init_files wasn't run)
    parent = os.path.dirname(path)
    os.makedirs(parent, exist_ok=True)
    _write_json(path, content)
