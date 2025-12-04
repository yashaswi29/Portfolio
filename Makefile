.PHONY: help install install-frontend install-backend dev-frontend dev-backend build docker-up docker-down docker-build clean

help:
	@echo "Available commands:"
	@echo "  make install         - Install dependencies for both frontend and backend"
	@echo "  make dev-frontend    - Run frontend development server"
	@echo "  make dev-backend     - Run backend development server"
	@echo "  make build           - Build frontend for production"
	@echo "  make docker-up       - Start services with Docker Compose"
	@echo "  make docker-down     - Stop services"
	@echo "  make docker-build    - Rebuild and start services"
	@echo "  make clean           - Clean up build artifacts and cache"

install: install-frontend install-backend

install-frontend:
	npm install

install-backend:
	pip install -e ./backend

front-run:
	npm run dev

back-run:
	cd backend && python -m uvicorn app.main:app --reload --port 7001

build:
	npm run build

docker-up:
	docker-compose up -d

docker-down:
	docker-compose down

docker-build:
	docker-compose up -d --build

clean:
	rm -rf dist
	rm -rf backend/build backend/dist backend/*.egg-info
	find . -name "__pycache__" -type d -exec rm -rf {} +
