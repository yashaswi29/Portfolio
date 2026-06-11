# Portfolio — Cloud DevOps Engineer

> _“If you can't host your portfolio yourself, do you even DevOps?”_ — Me

A full-stack personal portfolio, self-hosted on bare metal from my room over a plain
home internet connection. Not a static page on someone else's CDN — a real frontend,
a real API, real telemetry, and a real deployment pipeline that I own end to end.

**Live:** [yashaswi.cloud](https://yashaswi.cloud)

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-3-38BDF8?logo=tailwindcss&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?logo=fastapi&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-DC382D?logo=redis&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white)
![Prometheus](https://img.shields.io/badge/Prometheus-E6522C?logo=prometheus&logoColor=white)

---

## What's in here

- **Frontend** — React + TypeScript + Vite + Tailwind, with a dark-first terminal/amber
  theme, a light toggle, and an interactive in-browser terminal.
- **Backend** — FastAPI (async SQLAlchemy + PostgreSQL + Redis) serving first-party
  analytics, a contact endpoint, and health/metrics for probes.
- **Observability** — Prometheus + Grafana scraping custom app metrics.
- **Deployment** — Dockerized, served behind nginx + Cloudflare, redeployed by a cron pull.

---

## Stack

| Layer          | Tech                                                                 |
| -------------- | -------------------------------------------------------------------- |
| Frontend       | React 18, TypeScript, Vite, Tailwind CSS, React Router               |
| Backend        | Python, FastAPI, SQLAlchemy (async), `asyncpg`, Pydantic             |
| Data           | PostgreSQL, Redis (event queue + background worker)                  |
| Observability  | Prometheus, Grafana                                                  |
| Infra          | Docker, docker-compose, nginx reverse proxy, Cloudflare proxy + TLS  |

---

## Features

- **First-party analytics** — `AnalyticsTracker` records page visits, time-on-page, and
  click events; the API queues them through Redis to a background worker and into Postgres.
- **Contact form** — `POST /api/contact` validates and persists messages server-side.
- **Interactive terminal** — a mock shell on the About page (`help`, `whoami`, `stack`,
  `deploy`, …).
- **Prometheus metrics** — `PAGE_VISITS` counter and `PAGE_LOAD_DURATION` histogram on
  `/metrics`, plus a `/api/health` DB-ping for container/k8s probes.

---

## Project layout

```
.
├── src/                  # React frontend (pages, components, hooks, theme)
├── backend/              # FastAPI app (routers, models, core, worker)
│   └── app/
│       ├── routers/      # analytics · contact · health · metrics
│       ├── core/         # database · redis · storage · metrics · middleware
│       └── worker/       # Redis event processor
├── infra/                # monitoring (Prometheus/Grafana) + db compose, deploy scripts
├── Dockerfile            # frontend image
├── nginx.conf            # SPA reverse-proxy config
└── docker-compose.yml
```

---

## Run it locally

**Frontend**

```bash
npm install
npm run dev          # http://localhost:5173
```

**Backend** (needs Postgres + Redis; defaults to localhost)

```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload --port 7001
```

Vite proxies `/api` → `http://localhost:7001`, so the frontend talks to the local API
out of the box.

**Everything in Docker**

```bash
docker compose up --build
```

---

## Where it runs

| | |
| --- | --- |
| **Host** | Intel i5 10th gen · 16 GB DDR4 · 500 GB SSD |
| **OS** | Debian 13 (trixie) |
| **Network** | Airtel 100 Mbps, static IP |
| **Edge** | nginx reverse proxy (80/443) → Docker container, fronted by Cloudflare for TLS + IP masking |

---

## Automated deployment

A small `fetch_deploy.sh` pulls the latest code and rebuilds the container; a cron entry
runs it on a short interval and logs each build:

```cron
*/2 * * * * /home/$USER/Dev/Portfolio/fetch_deploy.sh >> cron.log 2>&1
```

> _“If it ain't automated, it ain't DevOps.”_ — Also me

### Roadmap

- [x] Python backend (analytics + contact API)
- [x] Monitoring + Grafana dashboards
- [ ] Migrate the homelab to k3s (Kubernetes) + self-hosted storage
- [ ] Push notification on deploy
- [ ] Validate build before restart + auto-retry on failure

---

_— Yashaswi Tiwari · bare-metal believer_
