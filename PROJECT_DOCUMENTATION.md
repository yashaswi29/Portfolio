# Portfolio Project Documentation

Welcome to the documentation for the DevOps / SRE Portfolio Project. This document details the overall architecture, frontend pages, custom functionality, and backend services that have been implemented.

## 1. Overview
The project is a full-stack portfolio application designed to showcase Cloud Engineering, DevOps methodologies, and Infrastructure as Code abilities. It's built with modern web technologies:
- **Frontend**: React, TypeScript, Vite, Tailwind CSS, and `react-router-dom`.
- **Backend**: Python, FastAPI, SQLAlchemy (Async), and PostgreSQL/SQLite (via `asyncpg`).
- **Observability & Deployment**: Docker, `docker-compose`, Prometheus, and Grafana.

## 2. Frontend Pages & Components
The application features a sleek, responsive frontend featuring a Light/Dark Mode toggle integration.

### Pages
- **Home (`Home.tsx`)**:
  - Contains a hero section with dynamic gradient text highlighting the developer's role and mission (e.g., SRE, Cloud Native, DevOps).
  - Showcases custom **Service Cards** detailing skills like "Infrastructure as Code", "CI/CD Pipelines", and "Cloud Architecture".
  - Features a **Technology Stack** grid utilizing Lucide Icons (AWS, Azure, Docker, Kubernetes, Linux, etc.).
- **About (`About.tsx`)**:
  - Highlights professional journey and timeline including current role as a Cloud Engineer, internships, and education history.
  - Presents verifiable certifications (e.g., AWS Certified Cloud Practitioner).
  - Directly hosts the custom built **Terminal UI** component.
- **Projects (`Projects.tsx`)**:
  - Showcases featured projects: *Jenkins Migration Toolkit*, *Real-Time CI/CD ChatApp*, and an *11-Microservices CI/CD Pipeline System*.
  - An expandable internal tools section ("Behind the Scenes Tools") that gives a glance at shell scripting methodologies and environment bootstrapping techniques.
  - Highlights an upcoming "HomeLab Kubernetes & Cloud Storage Cluster" featuring animations and rich gradient styling.
- **Contact (`Contact.tsx`)**:
  - Implements a functional Contact form.
  - Showcases contact methods, location, and easily accessible social links (GitHub, LinkedIn).

### Key Components
- **Terminal (`Terminal.tsx`)**:
  - A fully interactive shell-like UI integrated into the website. 
  - Allows users to type mock commands: `help`, `whoami`, `uptime`, `stack`, `deploy`, and `clear`.
  - Simulates a real DevOps terminal experience seamlessly inside the browser.
- **AnalyticsTracker (`AnalyticsTracker.tsx`)**:
  - **Functionality**: A quiet, headless component that attaches globally to the app via `App.tsx`.
  - Listens to React router location changes to track **page visits** and calculate the **time spent** on distinct views.
  - Adds a global click-listener that tracks user interactions with buttons, links, and forms.

## 3. Backend Architecture & Functionality

The backend powers the dynamic capabilities and tracking of the portfolio app to analyze real-time usage metrics. Using **FastAPI**, it serves the frontend telemetry while acting as a gateway for observability.

### Key Functionality
- **Telemetry & Tracking Routers (`routers/analytics.py`)**:
  - **`/api/analytics/visit`**: Records when a user visits a new page/section. Stores session identifiers, IP addresses, user agents, timestamps, and page section data into the database.
  - **`/api/analytics/performance`**: Sent asynchronously as the user navigates between pages. Logs how much time (in seconds) the user spent on the previous page via the `duration` column.
  - **`/api/analytics/event`**: Tracks specifically targeted UI selections like link clicks and button presses to understand what content receives the most interaction.
  - **`/api/analytics/summary`**: Serves aggregrate counts like `total_sessions` and `total_events` based dynamically on internal analytics tables.
  
- **Database Model (`models/orm.py`)**:
  - Creates the `AnalyticsEvent` table using SQLAlchemy mapping properties for ID, Session ID, Event Type (visit, click, performance), duration, target elements, timestamps, and IP/User Agent metadata.

- **Prometheus Metrics (`routers/metrics.py` & `core/metrics.py`)**:
  - Integrates Prometheus monitoring straight into the core app logic.
  - Exposes standard metrics on the `/metrics` endpoint.
  - Custom metrics include `PAGE_VISITS` Counter and `PAGE_LOAD_DURATION` Histogram.
  - Acts as the datasource for `prometheus.yml` running within the docker compose ecosystem.

- **Health Check (`routers/health.py`)**:
  - Simple `/api/health` validation endpoint that actively pings the relational database (using `SELECT 1`) to declare itself healthy to Docker/Kubernetes probes.

## 4. Automation & Observability 
(Foundations found inside the project root)
- **Containerization**: Both the frontend (`Dockerfile`) and backend (`backend/Dockerfile`) are ready for isolated deployments.
- **Compose Clusters**: The `docker-compose.monitoring.yml` connects Prometheus specifically to the Python backend to ingest metrics.
- **CI/CD**: `fetch_deploy.sh` and Github Actions support automated build-and-deploy lifecycles ensuring high uptime and reliable delivery.
