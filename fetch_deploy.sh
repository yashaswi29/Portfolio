#!/bin/bash
set -e

git fetch origin
git pull origin main
git reset --hard origin/main

FRONTEND_IMAGE="portfolio"
BACKEND_IMAGE="backend"
COMMIT_SHA=$(git rev-parse --short HEAD)
IMAGES_TO_KEEP=3

echo "-----Building frontend image (${COMMIT_SHA})...-----"
docker build -t "${FRONTEND_IMAGE}:${COMMIT_SHA}" -t "${FRONTEND_IMAGE}:latest" .

echo "-----Building backend image (${COMMIT_SHA})...-----"
docker build -t "${BACKEND_IMAGE}:${COMMIT_SHA}" -t "${BACKEND_IMAGE}:latest" ./backend

echo "-----Starting stack with docker-compose...-----"
docker compose up -d --force-recreate --build

echo "-----Cleaning up old images-----"

clean_old_images() {
    IMAGE_NAME=$1
    OLD_TAGS=$(docker images "${IMAGE_NAME}" --format '{{.Repository}}:{{.Tag}} {{.CreatedAt}}' \
        | grep -v -E "latest|${COMMIT_SHA}" \
        | sort -k2 -r \
        | tail -n +$((IMAGES_TO_KEEP + 1)) \
        | awk '{print $1}')

    if [ -n "$OLD_TAGS" ]; then
        echo "Removing old tags for ${IMAGE_NAME}: $OLD_TAGS"
        for tag in $OLD_TAGS; do
            CONTAINERS=$(docker ps -a --filter "ancestor=${tag}" -q)
            if [ -n "$CONTAINERS" ]; then
                docker rm -f $CONTAINERS
            fi
            docker rmi "$tag" 2>/dev/null || true
        done
    else
        echo "No old images to clean up for ${IMAGE_NAME}"
    fi
}

clean_old_images "${FRONTEND_IMAGE}"
clean_old_images "${BACKEND_IMAGE}"

docker image prune -f > /dev/null

echo "-----Deployment complete!-----"
docker ps --format "table {{.Names}}\t{{.Image}}\t{{.Status}}\t{{.Ports}}"
