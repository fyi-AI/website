# ═══════════════════════════════════════════════
# FYIAI Multi-Site Build + Nginx Deploy
# ═══════════════════════════════════════════════

# Stage 1: Build all 5 sites
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .

# Build each site into its own dist folder
RUN VITE_SITE=main  npx vite build --outDir dist-main  --emptyOutDir
RUN VITE_SITE=hvac  npx vite build --outDir dist-hvac  --emptyOutDir
RUN VITE_SITE=dental npx vite build --outDir dist-dental --emptyOutDir
RUN VITE_SITE=lawyer npx vite build --outDir dist-lawyer --emptyOutDir
RUN VITE_SITE=auto  npx vite build --outDir dist-auto  --emptyOutDir

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Copy each site to its own directory
COPY --from=build /app/dist-main   /var/www/main
COPY --from=build /app/dist-hvac   /var/www/hvac
COPY --from=build /app/dist-dental /var/www/dental
COPY --from=build /app/dist-lawyer /var/www/lawyer
COPY --from=build /app/dist-auto   /var/www/auto

# Nginx config for subdomain routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
