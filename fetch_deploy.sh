#!/bin/bash

set -e

git fetch origin
git reset --hard origin/main

IMAGE_BASE="portfolio"
PORT=7000

COMMIT_SHA=$(git rev-parse --short HEAD)

if ! docker images "${IMAGE_BASE}" --format '{{.Tag}}' | grep -q "^${COMMIT_SHA}$"; then
    docker build -t "${IMAGE_BASE}:${COMMIT_SHA}" -t "${IMAGE_BASE}:latest" .
else
    docker tag "${IMAGE_BASE}:${COMMIT_SHA}" "${IMAGE_BASE}:latest"
fi

CONTAINERS=$(docker ps -q --filter "ancestor=${IMAGE_BASE}:${COMMIT_SHA}")
if [ -n "$CONTAINERS" ]; then
    docker stop $CONTAINERS
    docker rm $CONTAINERS
fi

PORT=7000
PID=$(sudo lsof -t -i:${PORT} || true)
if [ -n "$PID" ]; then
    sudo kill -9 $PID || true
fi  

docker run -d -p ${PORT}:80 "${IMAGE_BASE}:latest"

docker images "${IMAGE_BASE}" --format '{{.Tag}} {{.CreatedAt}}' | grep -v latest | \
  grep -E '^[a-f0-9]{7,}' | sort -rk2 | awk '{print $1}' | tail -n +5 | while read old_tag; do
  docker rmi "${IMAGE_BASE}:${old_tag}" || true
done

echo "Deployment complete. Running container on port ${PORT} with image ${IMAGE_BASE}:${COMMIT_SHA}"