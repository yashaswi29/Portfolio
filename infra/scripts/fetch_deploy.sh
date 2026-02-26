
#!/usr/bin/env bash
set -euo pipefail

FRONTEND_IMAGE="docker.io/yashaswi29/portfolio-frontend:latest"
BACKEND_IMAGE="docker.io/yashaswi29/portfolio-backend:latest"
KEEP_IMAGES=3

deploy_service() {
  local IMAGE="$1"
  local CONTAINER="$2"
  local HOST_PORT="$3"
  local CONTAINER_PORT="$4"

  echo "▶ Deploying $CONTAINER ($IMAGE) on ${HOST_PORT}:${CONTAINER_PORT}"

  local OLD_IMAGE_ID
  OLD_IMAGE_ID=$(podman images --format "{{.ID}}" "$IMAGE" 2>/dev/null || true)

  echo "  - Pulling image..."
  podman pull "$IMAGE"

  local NEW_IMAGE_ID
  NEW_IMAGE_ID=$(podman images --format "{{.ID}}" "$IMAGE")

  if [[ -n "$OLD_IMAGE_ID" && "$OLD_IMAGE_ID" == "$NEW_IMAGE_ID" ]]; then
    echo "  ✅ Image unchanged, skipping restart."
    return
  fi

  echo "  🆕 New image detected, restarting $CONTAINER..."

  podman stop "$CONTAINER" 2>/dev/null || true
  podman rm "$CONTAINER" 2>/dev/null || true

  podman run -d \
    --name "$CONTAINER" \
    -p "${HOST_PORT}:${CONTAINER_PORT}" \
    --restart=unless-stopped \
    "$IMAGE"

  echo "  ✅ $CONTAINER is running."
}

clean_old_images() {
  local IMAGE_REPO="$1"  # e.g. docker.io/yashaswi29/portfolio

  echo "▶ Cleaning old images for $IMAGE_REPO (keeping $KEEP_IMAGES newest)..."

  local OLD_TAGS
  OLD_TAGS=$(podman images "$IMAGE_REPO" --format '{{.Repository}}:{{.Tag}} {{.Created}}' \
    | sort -k2 -r \
    | tail -n +$((KEEP_IMAGES + 1)) \
    | awk '{print $1}')

  if [[ -z "$OLD_TAGS" ]]; then
    echo "  - Nothing to remove."
    return
  fi

  for tag in $OLD_TAGS; do
    echo "  - Removing $tag"
    local CONTAINERS
    CONTAINERS=$(podman ps -a --filter "ancestor=${tag}" -q)
    if [[ -n "$CONTAINERS" ]]; then
      podman rm -f $CONTAINERS || true
    fi
    podman rmi "$tag" 2>/dev/null || true
  done
}

echo "===== Deploying portfolio stack ====="

# Frontend: 7001 -> 80
deploy_service "$FRONTEND_IMAGE" "portfolio" 7001 80

# Backend: 7002 -> 7001
deploy_service "$BACKEND_IMAGE" "backend" 7002 7001

# Clean up old images (keep 3 newest per repo)
clean_old_images "docker.io/yashaswi29/portfolio"
clean_old_images "docker.io/yashaswi29/backend"

echo "▶ Final containers:"
podman ps --format "table {{.Names}}\t{{.Image}}\t{{.Status}}\t{{.Ports}}"

echo "✅ Deployment complete."
