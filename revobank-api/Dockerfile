# Build date: 2026-04-18-v4
FROM node:20.18-alpine

WORKDIR /app

COPY package*.json ./
COPY tsconfig*.json ./
COPY nest-cli.json ./
COPY prisma ./prisma/

RUN npm install
RUN npx prisma generate

COPY . .

RUN npm run build && ls -la dist

EXPOSE 3000

CMD ["node", "dist/main.js"]