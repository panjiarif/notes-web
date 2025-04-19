FROM node:20-alpine
WORKDIR /app
COPY packgae*.json ./
RUN npm install --production
# --production : tanpa dev dependencies
COPY . .
EXPOSE 5001
CMD ["node", "index.js"]