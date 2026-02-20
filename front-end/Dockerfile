FROM node:20-alpine

WORKDIR /app

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Copy dependency files FIRST to cache the 'npm install' layer
# This is what speeds up subsequent builds
COPY package.json package-lock.json ./
RUN npm install

# For TESTING the image standalone, we copy the workspace config
# This prevents the "Outside a workspace" error
COPY angular.json tsconfig.json ./
COPY src ./src
COPY public ./public

EXPOSE 4200

# Use 0.0.0.0 so the server is reachable outside the container
CMD ["ng", "serve", "--host", "0.0.0.0"]