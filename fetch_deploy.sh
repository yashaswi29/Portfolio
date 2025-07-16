#!/bin/bash

set -e

git fetch origin
git reset --hard origin/main

FRONTEND_IMAGE="portfolio"
BACKEND_IMAGE="backend"
FRONTEND_PORT=7000
BACKEND_PORT=7001
COMMIT_SHA=$(git rev-parse --short HEAD)

echo "-----Building frontend image (${COMMIT_SHA})...-----"
docker build -t "${FRONTEND_IMAGE}:${COMMIT_SHA}" -t "${FRONTEND_IMAGE}:latest" .

echo "-----Building backend image (${COMMIT_SHA})...-----"
docker build -t "${BACKEND_IMAGE}:${COMMIT_SHA}" -t "${BACKEND_IMAGE}:latest" ./backend

echo "-----Stopping any existing containers...-----"

EXISTING_FRONTEND=$(docker ps --format '{{.ID}} {{.Ports}}' | grep ":${FRONTEND_PORT}->" | awk '{print $1}')
if [ -n "$EXISTING_FRONTEND" ]; then
    echo "Stopping frontend container on port ${FRONTEND_PORT}"
    docker stop "$EXISTING_FRONTEND"
    docker rm "$EXISTING_FRONTEND"
fi

EXISTING_BACKEND=$(docker ps --format '{{.ID}} {{.Ports}}' | grep ":${BACKEND_PORT}->" | awk '{print $1}')
if [ -n "$EXISTING_BACKEND" ]; then
    echo "Stopping backend container on port ${BACKEND_PORT}"
    docker stop "$EXISTING_BACKEND"
    docker rm "$EXISTING_BACKEND"
fi

echo "-----Starting new frontend container on port ${FRONTEND_PORT}-----"
docker run -d -p ${FRONTEND_PORT}:7000 "${FRONTEND_IMAGE}:latest"

echo "-----Starting new backend container on port ${BACKEND_PORT}-----"
docker run -d -p ${BACKEND_PORT}:7001 "${BACKEND_IMAGE}:latest"

echo "-----Cleaning up old images-----"
IMAGES_TO_KEEP=3

clean_old_images() {
    IMAGE_NAME=$1

    OLD_TAGS=$(docker images "${IMAGE_NAME}" --format '{{.Tag}} {{.CreatedAt}}' | \
           grep -v -E "^latest|^${COMMIT_SHA}" | \
           sort -k2 -r | \
           tail -n +$((IMAGES_TO_KEEP + 1)) | \
           awk '{print $1}')


    if [ -n "$OLD_TAGS" ]; then
        echo "Tags to remove for ${IMAGE_NAME}: $OLD_TAGS"

        for tag in $OLD_TAGS; do
            echo "Processing tag: $tag"

            CONTAINERS=$(docker ps -a --filter "ancestor=${IMAGE_NAME}:${tag}" -q)
            if [ -n "$CONTAINERS" ]; then
                echo "Removing containers for ${IMAGE_NAME}:${tag}"
                docker rm -f $CONTAINERS
            fi

            docker rmi "${IMAGE_NAME}:${tag}" 2>/dev/null || echo "Image ${IMAGE_NAME}:${tag} already removed"
        done
    else
        echo "No old images to clean up for ${IMAGE_NAME}"
    fi
}

clean_old_images "${FRONTEND_IMAGE}"
clean_old_images "${BACKEND_IMAGE}"

docker image prune -f > /dev/null

echo "-----Current images:-----"
docker images "${FRONTEND_IMAGE}"
docker images "${BACKEND_IMAGE}"

echo "Deployment complete!"
echo "Frontend (${FRONTEND_IMAGE}:${COMMIT_SHA}) running on port ${FRONTEND_PORT}"
echo "Backend (${BACKEND_IMAGE}:${COMMIT_SHA}) running on port ${BACKEND_PORT}"
