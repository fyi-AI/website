This repository contains a multi-site Vite build and an Nginx-based Docker image.

Quick deploy steps for Portainer (using GHCR image):

1. Build & push image via GitHub Actions
   - Push to `main` to trigger `.github/workflows/build-and-push.yml`.
   - The workflow will publish `ghcr.io/<OWNER>/fyiai-sites:latest`.

2. In Portainer:
   - Go to "App Templates" or "Stacks" and choose "Create stack".
   - Upload `stack-portainer.yml` or paste its contents.
   - Replace `GHCR_OWNER` in `stack-portainer.yml` with your GitHub org/user if necessary.
   - If the GHCR repo is private, configure registry credentials in Portainer (Registry > Add registry).
   - Deploy the stack.

3. DNS & TLS
   - Point A records for your domains (fyiai.us, hvac.fyiai.us, dental.fyiai.us, lawyer.fyiai.us, auto.fyiai.us) to the VPS IP.
   - For TLS, either:
     - Use a managed TLS option (Cloudflare or your cloud provider), or
     - Run a reverse proxy (Caddy/Traefik) on the host to obtain Let's Encrypt certificates and route to the container.

Local build & push commands (macOS):

```bash
# build locally
docker build -t ghcr.io/YOUR_GH_USER/fyiai-sites:latest .

# login to GHCR (use a PAT with write:packages if needed)
echo $GHCR_TOKEN | docker login ghcr.io -u YOUR_GH_USER --password-stdin

# push
docker push ghcr.io/YOUR_GH_USER/fyiai-sites:latest
```

If you want, I can also prepare a `deploy.sh` script that runs the build and pushes to GHCR for you.
