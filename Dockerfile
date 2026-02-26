FROM node:20-alpine
WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies (clean)
RUN npm ci

# Copy source code
COPY . .

# Expose Vite default port
EXPOSE 5173

# Run in development mode (host 0.0.0.0 is required for Docker)
CMD ["npm", "run", "dev", "--", "--host"]