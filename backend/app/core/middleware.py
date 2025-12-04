import time
from starlette.middleware.base import BaseHTTPMiddleware
from starlette.requests import Request
from app.core.metrics import REQUEST_COUNT, REQUEST_DURATION, ACTIVE_CONNECTIONS, ERROR_COUNT

class MetricsMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request: Request, call_next):
        start_time = time.time()
        ACTIVE_CONNECTIONS.inc()
        
        try:
            response = await call_next(request)
            duration = time.time() - start_time
            
            REQUEST_COUNT.labels(
                method=request.method,
                endpoint=request.url.path,
                status_code=response.status_code
            ).inc()
            
            REQUEST_DURATION.labels(
                method=request.method,
                endpoint=request.url.path
            ).observe(duration)
            
            return response
        except Exception as e:
            ERROR_COUNT.labels(error_type=type(e).__name__).inc()
            raise e
        finally:
            ACTIVE_CONNECTIONS.dec()
