# ==========================================================
# Assignment 13 - UI Component Library (Build Checks)
# Author: Mark Kenneth Garcia
# ==========================================================

# -----------------------------
# STAGE 1 – Build React App
# -----------------------------
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /garcia_markkenneth_ui_garden_build_checks

# Copy dependency files first
COPY package*.json ./

# Install dependencies (ignore peer-dep conflicts + include dev deps)
RUN npm install --legacy-peer-deps --include=dev

# ⬇ Explicitly ensure react-scripts is present
RUN npm install react-scripts@latest --save-dev --legacy-peer-deps

# Copy all source code
COPY . .

# Build the production-ready app
RUN npx react-scripts build
# -----------------------------
# STAGE 2 – Serve with Nginx
# -----------------------------
  
FROM nginx:1.27-alpine

# Copy the React build output directly into nginx's default directory
COPY --from=builder /garcia_markkenneth_ui_garden_build_checks/build /usr/share/nginx/html

# Overwrite the default nginx configuration
RUN echo 'server { \
    listen 8018; \
    server_name localhost; \
    root /usr/share/nginx/html; \
    index index.html; \
    location / { \
        try_files $uri $uri/ /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 8018

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
