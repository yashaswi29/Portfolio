from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import analytics, health, metrics
from app.core.middleware import MetricsMiddleware
import logging


logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI(title="Portfolio Analytics Backend")


from app.core.database import engine
from app.models.analytics import Base
from app.worker.event_processor import start_worker
import asyncio
import os
import redis.asyncio as aioredis # type: ignore

@app.on_event("startup")
async def startup_event():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
    logger.info("Database initialized")
    REDIS_URL = os.getenv("REDIS_URL", "redis://localhost:6379/0")
    try:
        redis_client = await aioredis.from_url(REDIS_URL)
        asyncio.create_task(start_worker(redis_client))
        logger.info("Redis worker started")
    except Exception as e:
        logger.error(f"Failed to start Redis worker: {e}")


app.add_middleware(MetricsMiddleware)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(analytics.router)
app.include_router(health.router)
app.include_router(metrics.router)

@app.get("/")
async def root():
    return {
        "message": "Portfolio Analytics Backend",
        "endpoints": [
            "/api/analytics/visit",
            "/api/analytics/performance",
            "/api/analytics/event",
            "/api/analytics/summary",
            "/api/health",
            "/metrics"
        ]
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app.main:app", host="0.0.0.0", port=7001, reload=True)
