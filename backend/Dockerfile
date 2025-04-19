FROM node:20-alpine
WORKDIR /app

# Salin hanya package.json dan lock-nya
COPY package*.json ./

# Jalankan npm install di dalam container
RUN npm install --production

# Baru salin semua source code
COPY . .

EXPOSE 8080
CMD ["node", "index.js"]
