from fastapi import FastAPI
from app.routes import portfolio

app = FastAPI()

app.include_router(portfolio.router)
