FROM python:3.13-slim

WORKDIR /app

COPY pyproject.toml .

COPY app ./app

RUN pip install --no-cache-dir .

RUN mkdir -p data

EXPOSE 7001

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "7001"]