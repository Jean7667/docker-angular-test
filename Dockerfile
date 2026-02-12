FROM node:20.11.1

# Set working directory
WORKDIR /usr/src/app

# Install Angular CLI globally
RUN npm install -g @angular/cli@19.2.14

# Copy package files
COPY front-end/package.json front-end/package-lock.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY front-end/ .

# Expose port
EXPOSE 4200

# Start the application in development mode
CMD ["ng", "serve", "--host", "0.0.0.0", "--disable-host-check"]
