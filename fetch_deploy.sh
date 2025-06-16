#!/bin/bash

set -e

git fetch origin
git reset --hard origin/main

IMAGE_BASE="portfolio"
PORT=7000
COMMIT_SHA=$(git rev-parse --short HEAD)

echo "-----Building Docker image for commit ${COMMIT_SHA}...-----"
docker build -t "${IMAGE_BASE}:${COMMIT_SHA}" -t "${IMAGE_BASE}:latest" .
echo "-----Image ${IMAGE_BASE}:${COMMIT_SHA} built successfully.-----"


EXISTING_CONTAINER=$(docker ps --format '{{.ID}} {{.Ports}}' | grep ":${PORT}->" | awk '{print $1}')
if [ -n "$EXISTING_CONTAINER" ]; then
    echo "-----Stopping container on port ${PORT}-----"
    docker stop "$EXISTING_CONTAINER"
    docker rm "$EXISTING_CONTAINER"
fi


echo "-----Starting new container on port ${PORT}-----"
docker run -d -p ${PORT}:80 "${IMAGE_BASE}:latest"


echo "-----Cleaning up old images-----"
IMAGES_TO_KEEP=3


OLD_TAGS=$(docker images "${IMAGE_BASE}" --format '{{.Tag}} {{.CreatedAt}}' | \
           grep -v "^latest " | \
           sort -k2 -r | \
           tail -n +$((IMAGES_TO_KEEP + 1)) | \
           awk '{print $1}')

if [ -n "$OLD_TAGS" ]; then
    echo "Tags to remove: $OLD_TAGS"

    for tag in $OLD_TAGS; do
        echo "Processing tag: $tag"
        
        # Remove containers using this image
        CONTAINERS=$(docker ps -a --filter "ancestor=${IMAGE_BASE}:${tag}" -q)
        if [ -n "$CONTAINERS" ]; then
            echo "Removing containers for ${IMAGE_BASE}:${tag}"
            docker rm -f $CONTAINERS
        fi
        
        docker rmi "${IMAGE_BASE}:${tag}" 2>/dev/null || echo "Image ${IMAGE_BASE}:${tag} already removed"
    done
else
    echo "No old images to clean up"
fi

docker image prune -f > /dev/null

echo "-----Current images:-----"
docker images "${IMAGE_BASE}"

echo "Deployment complete! Running ${IMAGE_BASE}:latest (${COMMIT_SHA}) on port ${PORT}"