# Dockerfile for running the chatgpt-clone demo
FROM node:18-alpine
WORKDIR /app

# Install bash for scripts and small utilities
RUN apk add --no-cache bash

# Copy just package manifests first if you want to install dependencies at root
# (Adjust as needed if chatgpt-clone has its own package.json)
COPY . .

WORKDIR /app/chatgpt-clone
RUN npm ci --production

ENV PORT=3000
EXPOSE 3000
CMD ["node","server.js"]
