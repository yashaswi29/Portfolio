from fastapi import APIRouter, HTTPException, Request
from datetime import datetime
from app.models.schemas import VisitEvent, PerformanceEvent, ClickEvent
from app.core.metrics import PAGE_VISITS, PAGE_LOAD_DURATION, ERROR_COUNT
from app.core.storage import append_to_analytics, read_json, ANALYTICS_FILE
import logging

router = APIRouter(prefix="/api/analytics", tags=["analytics"])
logger = logging.getLogger(__name__)

@router.post("/visit")
async def track_visit(event: VisitEvent, request: Request):
    try:
        PAGE_VISITS.labels(section=event.section).inc()
        
        visit_data = event.model_dump()
        if not visit_data.get("timestamp"):
            visit_data["timestamp"] = datetime.now().isoformat()
        if not visit_data.get("ip"):
            visit_data["ip"] = request.client.host
        if not visit_data.get("user_agent"):
            visit_data["user_agent"] = request.headers.get("User-Agent", "unknown")
            
        append_to_analytics("visits", visit_data)
        return {"message": "Visit tracked"}
    except Exception as e:
        ERROR_COUNT.labels("visit_error").inc()
        logger.error(f"Visit tracking failed: {e}")
        raise HTTPException(status_code=500, detail="Tracking failed")

@router.post("/performance")
async def track_performance(event: PerformanceEvent):
    try:
        PAGE_LOAD_DURATION.labels(section=event.section).observe(event.duration)
        
        perf_data = event.model_dump()
        if not perf_data.get("timestamp"):
            perf_data["timestamp"] = datetime.now().isoformat()
            
        append_to_analytics("performance", perf_data)
        return {"message": "Performance tracked"}
    except Exception as e:
        ERROR_COUNT.labels("perf_error").inc()
        logger.error(f"Performance tracking failed: {e}")
        raise HTTPException(status_code=500, detail="Tracking failed")

@router.post("/event")
async def track_event(event: ClickEvent, request: Request):
    try:
        event_data = event.model_dump()
        if not event_data.get("timestamp"):
            event_data["timestamp"] = datetime.now().isoformat()
        if not event_data.get("ip"):
            event_data["ip"] = request.client.host
        if not event_data.get("user_agent"):
            event_data["user_agent"] = request.headers.get("User-Agent", "unknown")
            
        append_to_analytics("events", event_data)
        return {"message": "Event tracked"}
    except Exception as e:
        ERROR_COUNT.labels("event_error").inc()
        logger.error(f"Event tracking failed: {e}")
        raise HTTPException(status_code=500, detail="Tracking failed")

@router.get("/summary")
async def get_summary():
    try:
        data = read_json(ANALYTICS_FILE)
        visits = data.get("visits", [])
        performance = data.get("performance", [])
        events = data.get("events", [])
        
        summary = {
            "total_visits": len(visits),
            "sections_visited": list(set(v["section"] for v in visits if "section" in v)),
            "avg_duration": round(sum(p["duration"] for p in performance) / len(performance), 2) if performance else 0,
            "total_events": len(events)
        }
        return summary
    except Exception as e:
        logger.error(f"Summary error: {e}")
        raise HTTPException(status_code=500, detail="Summary failed")
