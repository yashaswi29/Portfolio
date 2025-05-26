from fastapi import APIRouter

router = APIRouter()

@router.get("/api/hello")
def hello():
    {"message": "Hello from FastAPI!"}
    