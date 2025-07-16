FROM python:3.13-slim
WORKDIR /app
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt
RUN pip install gunicorn
COPY app.py .
COPY data ./data
EXPOSE 7001
CMD ["gunicorn", "--bind", "0.0.0.0:7001", "app:app"]
