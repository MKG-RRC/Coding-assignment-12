# ==========================================================
# Assignment 12 - React Component Library (UI Garden)
# Multi-Stage Dockerfile for production deployment
# ==========================================================

# -----------------------------
# STAGE 1 – Build React App
# -----------------------------
FROM node:20-alpine AS builder
WORKDIR /app

# Copy dependency files and install
COPY package*.json ./
RUN npm install

# Copy all source files and build
COPY . .
RUN npm run build

# -----------------------------
# STAGE 2 – Serve with Nginx
# -----------------------------
FROM nginx:1.27-alpine
WORKDIR /garcia_mark_ui_garden

# Copy built app from builder stage
COPY --from=builder /app/build ./

# Replace Nginx default configuration
RUN /bin/sh -c 'printf "server {\n\
  listen 8083;\n\
  server_name localhost;\n\
  root /garcia_mark_ui_garden;\n\
  index index.html;\n\
  location / {\n\
    try_files \\$uri \\$uri/ /index.html;\n\
  }\n\
  error_page 500 502 503 504 /index.html;\n\
}\n" > /etc/nginx/conf.d/default.conf'

# Expose the required port
EXPOSE 8083

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
