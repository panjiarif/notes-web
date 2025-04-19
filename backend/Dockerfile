FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install only production dependencies
RUN npm install --production

# Copy source code
COPY . .

# Set the expected port (Cloud Run uses 8080)
EXPOSE 8080

# Run the app
CMD ["node", "index.js"]
