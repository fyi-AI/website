#!/usr/bin/env bash
set -euo pipefail

# Helper to commit and push repository to remote
# Usage:
#   export REMOTE_URL=git@github.com:youruser/yourrepo.git
#   ./git-push.sh

REMOTE_URL=${REMOTE_URL:-}
BRANCH=${BRANCH:-main}

if [ -z "$REMOTE_URL" ]; then
  echo "Error: set REMOTE_URL environment variable (git remote to push to)"
  exit 1
fi

if [ ! -d .git ]; then
  git init
fi

git add .
if git diff --staged --quiet; then
  echo "No changes to commit."
else
  git commit -m "chore: add CI, deploy scripts, Portainer stack"
fi

git branch -M $BRANCH || true
if git remote | grep -q origin; then
  git remote remove origin || true
fi
git remote add origin $REMOTE_URL

echo "Pushing to $REMOTE_URL (branch $BRANCH)"
git push -u origin $BRANCH
