.PHONY: install dev-run clean

install:
	pip install -e .

dev-run:
	uvicorn app.main:app --reload --port 7001

clean:
	rm -rf build/
	rm -rf dist/
	rm -rf *.egg-info
	find . -name "__pycache__" -type d -exec rm -rf {} +
