#!/bin/bash

set -e

git fetch origin
git reset --hard origin/main

IMAGE_BASE="portfolio"
PORT=7000
COMMIT_SHA=$(git rev-parse --short HEAD)

echo "-----Building Docker image for commit ${COMMIT_SHA}...-----"
if ! docker images "${IMAGE_BASE}" --format '{{.Tag}}' | grep -q "^${COMMIT_SHA}$"; then
    docker build -t "${IMAGE_BASE}:${COMMIT_SHA}" -t "${IMAGE_BASE}:latest" .
else
    docker tag "${IMAGE_BASE}:${COMMIT_SHA}" "${IMAGE_BASE}:latest"
fi

echo "-----Image ${IMAGE_BASE}:${COMMIT_SHA} built successfully.-----"
echo "-----Stoping and removing any existing container running on port ${PORT}-----"
EXISTING_CONTAINER=$(docker ps --format '{{.ID}} {{.Ports}}' | grep ":${PORT}->" | awk '{print $1}')
if [ -n "$EXISTING_CONTAINER" ]; then
    docker stop "$EXISTING_CONTAINER"
    docker rm "$EXISTING_CONTAINER"
fi

docker run -d -p ${PORT}:80 "${IMAGE_BASE}:latest"

echo "-----Running new container with image ${IMAGE_BASE}:latest on port ${PORT}-----"
docker images "${IMAGE_BASE}" --format '{{.Tag}} {{.CreatedAt}}' | grep -v latest | \
  grep -E '^[a-f0-9]{7,}' | sort -rk2 | awk '{print $1}' | tail -n +5 | while read old_tag; do
  docker rmi "${IMAGE_BASE}:${old_tag}" || true
done

echo "-----Deployment complete. Running container on port ${PORT} with image ${IMAGE_BASE}:${COMMIT_SHA}-----"
