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


EXISTING_CONTAINER=$(docker ps --format '{{.ID}} {{.Ports}}' | grep ":${PORT}->" | awk '{print $1}')
if [ -n "$EXISTING_CONTAINER" ]; then
    echo "-----Stopping and removing container using port ${PORT}-----"
    docker stop "$EXISTING_CONTAINER"
    docker rm "$EXISTING_CONTAINER"
fi

echo "-----Starting new container on port ${PORT}-----"
docker run -d -p ${PORT}:80 "${IMAGE_BASE}:latest"

echo "-----Removing orphan/idle containers linked to old images-----"
docker ps -a --filter "ancestor=${IMAGE_BASE}:c9f62a9" -q | xargs -r docker rm -f

echo "-----Cleaning up old image tags-----"
docker images "${IMAGE_BASE}" --format '{{.Tag}} {{.CreatedAt}}' | grep -v latest | \
  grep -E '^[a-f0-9]{7,}' | sort -rk2 | awk '{print $1}' | tail -n +4 | \
  while read old_tag; do
    echo "Removing image tag ${old_tag}"
    docker rmi "${IMAGE_BASE}:${old_tag}" || true
  done

echo "-----Force removing containers using stale images-----"
docker images "${IMAGE_BASE}" --format '{{.Tag}} {{.ID}}' | grep -v -e latest -e "${COMMIT_SHA}" | \
while read tag img_id; do
  echo "Force removing stale image: ${img_id} (tag: ${tag})"

  docker ps -a --filter "ancestor=${img_id}" -q | xargs -r docker rm -f

  docker images "${IMAGE_BASE}" --format '{{.Tag}} {{.ID}}' | \
    awk -v id="$img_id" '$2 == id { print $1 }' | \
    xargs -I{} docker rmi "${IMAGE_BASE}:{}" || true

  docker rmi "${img_id}" || true
done
docker image prune -f

echo "Deployment complete! Running ${IMAGE_BASE}:${COMMIT_SHA} on port ${PORT}"
