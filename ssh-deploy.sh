#!/usr/bin/env bash
set -euo pipefail

# SSH deploy helper
# Usage (locally):
#   export SSH_USER=ubuntu
#   export SSH_HOST=1.2.3.4
#   export SSH_PORT=22         # optional
#   export SSH_KEY=~/.ssh/id_rsa # optional
#   export GHCR_OWNER=your-gh-user
#   export GHCR_TOKEN=ghp_...  # PAT with packages:write
#   ./ssh-deploy.sh

SSH_USER=${SSH_USER:-}
SSH_HOST=${SSH_HOST:-}
SSH_PORT=${SSH_PORT:-22}
SSH_KEY_FLAG=""
REMOTE_DIR=${REMOTE_DIR:-/home/${SSH_USER}/fyiai-deploy}

if [ -z "$SSH_USER" ] || [ -z "$SSH_HOST" ] || [ -z "${GHCR_OWNER:-}" ] || [ -z "${GHCR_TOKEN:-}" ]; then
  echo "Error: set SSH_USER, SSH_HOST, GHCR_OWNER, and GHCR_TOKEN environment variables"
  exit 1
fi

if [ -n "${SSH_KEY:-}" ]; then
  SSH_KEY_FLAG="-i $SSH_KEY"
fi

REMOTE="$SSH_USER@$SSH_HOST"

echo "Copying docker-compose.yml to $REMOTE:$REMOTE_DIR"
ssh $SSH_KEY_FLAG -p $SSH_PORT $REMOTE "mkdir -p $REMOTE_DIR"
scp $SSH_KEY_FLAG -P $SSH_PORT docker-compose.yml $REMOTE:$REMOTE_DIR/

echo "Running remote deploy on $REMOTE"
ssh $SSH_KEY_FLAG -p $SSH_PORT $REMOTE bash -s <<EOF
set -euo pipefail
cd $REMOTE_DIR || exit 1

# Login to GHCR
echo "$GHCR_TOKEN" | docker login ghcr.io -u "$GHCR_OWNER" --password-stdin

# Try docker compose first
if command -v docker >/dev/null 2>&1 && docker compose version >/dev/null 2>&1; then
  docker compose pull || true
  docker compose up -d --remove-orphans
  exit 0
fi

# Fallback: pull image and run container
IMAGE="ghcr.io/$GHCR_OWNER/fyiai-sites:latest"
docker pull "$IMAGE"
if docker ps -q -f name=fyiai | grep -q .; then
  docker rm -f fyiai || true
fi
docker run -d --name fyiai --restart=always -p 80:80 ghcr.io/$GHCR_OWNER/fyiai-sites:latest
EOF

echo "Remote deploy finished."
