import asyncio
import sys
import os

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from app.core.database import engine
from app.models.analytics import Base

async def reset():
    async with engine.begin() as conn:
        print("Dropping all tables...")
        await conn.run_sync(Base.metadata.drop_all)
        print("Creating all tables from current models...")
        await conn.run_sync(Base.metadata.create_all)
    print("Database reset successful!")

if __name__ == "__main__":
    asyncio.run(reset())
