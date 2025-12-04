from fastapi import APIRouter, Request
from datetime import datetime
from app.models.schemas import VisitEvent, PerformanceEvent, ClickEvent
from app.core.storage import append_analytics, append_daily_event, _read_json
from app.core.metrics import PAGE_VISITS, PAGE_LOAD_DURATION

router = APIRouter(prefix="/api/analytics", tags=["analytics"])


def _now_iso() -> str:
    return datetime.now().replace(microsecond=0).isoformat()


def _client_info(request: Request) -> tuple[str, str]:
    forwarded = request.headers.get("x-forwarded-for")
    if forwarded:
        ip = forwarded.split(",")[0].strip()
    else:
        ip = request.client.host if request.client else "127.0.0.1"

    ua = request.headers.get("user-agent", "")
    return ip, ua


@router.post("/visit")
async def track_visit(request: Request, payload: VisitEvent):
    ip, ua = _client_info(request)
    timestamp = payload.timestamp or _now_iso()

    entry = {
        "type": "page_visit",
        "section": payload.section,
        "timestamp": timestamp,
        "ip": ip,
        "user_agent": ua,
    }

    append_analytics("visits", entry)
    append_daily_event(entry)

    try:
        PAGE_VISITS.labels(section=payload.section).inc()
    except Exception:
        pass

    return {"status": "ok"}


@router.post("/performance")
async def track_performance(request: Request, payload: PerformanceEvent):
    ip, ua = _client_info(request)
    timestamp = payload.timestamp or _now_iso()

    entry = {
        "type": "page_performance",
        "section": payload.section,
        "duration": payload.duration,
        "timestamp": timestamp,
        "ip": ip,
        "user_agent": ua,
    }

    append_analytics("performance", entry)
    append_daily_event(entry)

    try:
        PAGE_LOAD_DURATION.labels(section=payload.section).observe(float(payload.duration))
    except Exception:
        pass

    return {"status": "ok"}


@router.post("/event")
async def track_event(request: Request):
    body = await request.json()
    # allow flexible event payloads; map known fields
    ip, ua = _client_info(request)
    timestamp = body.get("timestamp") or _now_iso()

    event_type = body.get("event_type") or body.get("type") or "event"
    section = body.get("section") or body.get("page")
    target = body.get("element_id") or body.get("element_name") or body.get("target")

    entry = {
        "type": event_type,
        "section": section,
        "target": target,
        "timestamp": timestamp,
        "ip": ip,
        "user_agent": ua,
    }

    # include other metadata if present
    extras = {k: v for k, v in body.items() if k not in {"event_type", "type", "section", "page", "element_id", "element_name", "target", "timestamp"}}
    if extras:
        entry["metadata"] = extras

    append_analytics("events", entry)
    append_daily_event(entry)

    return {"status": "ok"}


@router.get("/summary")
async def summary():
    data = _read_json("data/analytics.json") or {}
    visits = data.get("visits", [])
    performance = data.get("performance", [])
    events = data.get("events", [])

    total_visits = len(visits)
    total_events = len(events)
    avg_load = None
    try:
        if performance:
            avg_load = sum([p.get("duration", 0) for p in performance]) / len(performance)
    except Exception:
        avg_load = None

    return {
        "total_visits": total_visits,
        "total_events": total_events,
        "avg_load_duration": avg_load,
    }
