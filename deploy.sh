#!/usr/bin/env bash
set -euo pipefail

# Simple deploy script: build image and push to GHCR
# Usage:
#   export GHCR_OWNER=your-gh-user
#   export GHCR_TOKEN=ghp_...   # or use a PAT with packages:write
#   ./deploy.sh

OWNER=${GHCR_OWNER:-}
TOKEN=${GHCR_TOKEN:-}
IMAGE="ghcr.io/${OWNER}/fyiai-sites:latest"

if [ -z "$OWNER" ] || [ -z "$TOKEN" ]; then
  echo "Error: set GHCR_OWNER and GHCR_TOKEN environment variables"
  echo "Example: export GHCR_OWNER=youruser && export GHCR_TOKEN=ghp_..."
  exit 1
fi

echo "Building Vite sites and Docker image..."
npm ci
node scripts/build-all.js

docker build -t fyiai-sites:latest .
docker tag fyiai-sites:latest $IMAGE

echo "Logging in to ghcr.io..."
echo "$TOKEN" | docker login ghcr.io -u "$OWNER" --password-stdin

echo "Pushing $IMAGE..."
docker push $IMAGE

echo "Done. Image available: $IMAGE"
