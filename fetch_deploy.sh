  podman pull "$IMAGE"

  local NEW_IMAGE_ID
  NEW_IMAGE_ID=$(podman images --format "{{.ID}}" "$IMAGE")

  if [[ -n "$OLD_IMAGE_ID" && "$OLD_IMAGE_ID" == "$NEW_IMAGE_ID" ]]; then
    echo "  ✅ Image unchanged, skipping restart."
    return
  fi

  echo "  🆕 New image detected, restarting container..."

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
  local KEEP="$2"

podman ps --format "table {{.Names}}\t{{.Image}}\t{{.Status}}\t{{.Ports}}"

echo "✅ Deployment complete."