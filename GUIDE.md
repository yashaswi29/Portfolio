# Developer Guide

This guide details how to run the Portfolio Application stack locally, either with Docker (Recommended) or strictly on your host machine.

## Prerequisites

- **Docker & Docker Compose** (for Docker method)
- **Node.js v18+ & npm** (for manual method)
- **Python 3.10+ & pip** (for manual method)
- **PostgreSQL** (for manual backend method)

---

## 🐋 Method 1: Running with Docker (Recommended)

This method sets up the Frontend, Backend, and Database automatically in isolated containers.

### 1. Build and Start
Run the following command in the root directory:

```bash
docker-compose up --build
```

### 2. Access the Application
- **Frontend (Portfolio):** http://localhost:7002
- **Backend API:** http://localhost:7001
- **Database:** Accessed internally via `postgres:5432`

### 3. Stop the Application
Press `Ctrl+C` to stop. To remove containers and networks:
```bash
docker-compose down
```

---

## 🛠 Method 2: Running Without Docker

If you prefer running everything manually on your machine.

### Part A: Database Setup (PostgreSQL)
1. Ensure you have PostgreSQL running locally.
2. Create a database named `portfolio_db`.
3. Create a user `user` with password `password` (or update environment variables).

### Part B: Backend (FastAPI)

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Create and activate a virtual environment:
   ```bash
   python3 -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Run the Backend Server:
   Export the database URL (if different from default) and start the server.
   ```bash
   export DATABASE_URL="postgresql+asyncpg://user:password@localhost/portfolio_db"
   uvicorn app.main:app --reload --port 7001
   ```
   *The API will be available at http://localhost:7001*

### Part C: Frontend (React + Vite)

1. Open a new terminal and navigate to the root directory:
   ```bash
   cd /path/to/Portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the Development Server:
   ```bash
   npm run dev
   ```
   *The Frontend will likely start at http://localhost:5173 (check terminal output)*

---

## 🔍 Verification

1. Go to the **Portfolio** in your browser.
2. Navigate to **About** page.
3. Check the **Terminal** at the bottom of the page; it should be interactive.
4. **Analytics**: Your page visits are now silently being recorded to the PostgreSQL database.
