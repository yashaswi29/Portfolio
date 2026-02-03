from fastapi import APIRouter, Request, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, func
from datetime import datetime
from app.models.schemas import VisitEvent, PerformanceEvent, ClickEvent
from app.models.orm import AnalyticsEvent
from app.core.database import get_db
from app.core.metrics import PAGE_VISITS, PAGE_LOAD_DURATION

router = APIRouter(prefix="/api/analytics", tags=["analytics"])


def _client_info(request: Request) -> tuple[str, str]:
    forwarded = request.headers.get("x-forwarded-for")
    if forwarded:
        ip = forwarded.split(",")[0].strip()
    else:
        ip = request.client.host if request.client else "127.0.0.1"
    ua = request.headers.get("user-agent", "")
    return ip, ua


@router.post("/visit")
async def track_visit(request: Request, payload: VisitEvent, db: AsyncSession = Depends(get_db)):
    ip, ua = _client_info(request)
    
    # Create DB Record
    event = AnalyticsEvent(
        session_id=payload.session_id,
        event_type="page_visit",
        section=payload.section,
        ip=ip,
        user_agent=ua,
        timestamp=datetime.now()
    )
    
    db.add(event)
    await db.commit()

    try:
        PAGE_VISITS.labels(section=payload.section).inc()
    except Exception:
        pass

    return {"status": "ok"}


@router.post("/performance")
async def track_performance(request: Request, payload: PerformanceEvent, db: AsyncSession = Depends(get_db)):
    ip, ua = _client_info(request)

    event = AnalyticsEvent(
        session_id=payload.session_id,
        event_type="page_performance",
        section=payload.section,
        duration=payload.duration,
        ip=ip,
        user_agent=ua,
        timestamp=datetime.now()
    )
    
    db.add(event)
    await db.commit()

    try:
        PAGE_LOAD_DURATION.labels(section=payload.section).observe(float(payload.duration))
    except Exception:
        pass

    return {"status": "ok"}


@router.post("/event")
async def track_event(request: Request, payload: ClickEvent, db: AsyncSession = Depends(get_db)):
    ip, ua = _client_info(request)
    
    event = AnalyticsEvent(
        session_id=payload.session_id,
        event_type=payload.event_type,
        section=payload.page, 
        target_element=f"{payload.element_name} ({payload.element_id})",
        ip=ip,
        user_agent=ua,
        timestamp=datetime.now()
    )
    
    db.add(event)
    await db.commit()

    return {"status": "ok"}


@router.get("/summary")
async def summary(db: AsyncSession = Depends(get_db)):
    # Example complex query: Count unique sessions
    result = await db.execute(select(func.count(func.distinct(AnalyticsEvent.session_id))))
    total_sessions = result.scalar() or 0
    
    # Count total events
    result = await db.execute(select(func.count(AnalyticsEvent.id)))
    total_events = result.scalar() or 0
    
    return {
        "total_sessions": total_sessions,
        "total_events": total_events
    }
