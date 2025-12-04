from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import analytics, health, metrics
from app.core.middleware import MetricsMiddleware
from app.core.storage import init_files
import logging


logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI(title="Portfolio Analytics Backend")


@app.on_event("startup")
async def startup_event():
    init_files()
    logger.info("Storage files initialized")


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
