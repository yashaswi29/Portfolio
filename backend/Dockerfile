FROM python3.13-slim-bullseye
WORKDIR /app
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt
pip install gunicorn
COPY app.py .
COPY data ./data
EXPOSE 7002
CMD ["gunicorn", "--bind", "0.0.0:7002", "app:app"]
