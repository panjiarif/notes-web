FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --production
# --production : tanpa dev dependencies
COPY . .
EXPOSE 8080
CMD ["node", "index.js"]