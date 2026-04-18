# Build date: 2026-04-18-v2
FROM node:20.18-alpine

WORKDIR /app

COPY package*.json ./
COPY tsconfig*.json ./
COPY nest-cli.json ./
COPY prisma ./prisma/

RUN npm install
RUN npx prisma generate

COPY . .

RUN rm -rf dist && npm run build && echo "=== DIST CONTENTS ===" && ls -la dist && echo "=== AUTH CONTENTS ===" && ls -la dist/auth || echo "AUTH NOT FOUND"

EXPOSE 3000

CMD ["node", "dist/main.js"]