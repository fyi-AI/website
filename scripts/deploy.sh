#!/bin/bash
set -e

# ═══════════════════════════════════════════════
# FYIAI Deploy Script — runs on VPS
# Place this at /opt/fyiai-deploy.sh on your VPS
# chmod +x /opt/fyiai-deploy.sh
# ═══════════════════════════════════════════════

APP_NAME="fyiai-sites"
REPO_URL="https://github.com/YOUR_USERNAME/fyiai-sites.git"
DEPLOY_DIR="/opt/$APP_NAME"

echo "🚀 Deploying $APP_NAME..."

# Clone or pull latest
if [ -d "$DEPLOY_DIR" ]; then
    cd "$DEPLOY_DIR"
    git pull origin main
else
    git clone "$REPO_URL" "$DEPLOY_DIR"
    cd "$DEPLOY_DIR"
fi

# Build Docker image
docker build -t $APP_NAME .

# Stop & remove old container
docker stop $APP_NAME 2>/dev/null || true
docker rm $APP_NAME 2>/dev/null || true

# Run new container
docker run -d \
    --name $APP_NAME \
    --restart unless-stopped \
    -p 80:80 \
    $APP_NAME

# Clean up old images
docker image prune -f

echo "✅ Deployed! Sites are live:"
echo "   fyiai.us"
echo "   hvac.fyiai.us"
echo "   dental.fyiai.us"
echo "   lawyer.fyiai.us"
echo "   auto.fyiai.us"
