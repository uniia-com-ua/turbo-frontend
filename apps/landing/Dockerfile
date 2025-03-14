FROM node:20-alpine AS base

# This Dockerfile is copy-pasted into our main docs at /docs/handbook/deploying-with-docker.
# Make sure you update both files!

FROM base AS builder
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk update
RUN apk add --no-cache libc6-compat
# Set working directory
WORKDIR /app
RUN npm install -g turbo

# Важливо: цей Dockerfile треба запускати з кореня монорепозиторію: 
# docker build -f apps/landing/Dockerfile .
COPY . .

# Оптимізована стратегія для монорепозиторію: виконуємо prune, потім встановлюємо залежності
RUN npx turbo prune --scope=uniia-landing --docker

# Створюємо новий етап для встановлення та збірки
FROM base AS installer
RUN apk update
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Копіюємо package.json файли для всіх залежностей
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/package-lock.json ./package-lock.json

# Встановлюємо всі залежності 
RUN npm ci

# Копіюємо вихідний код всіх пакетів
COPY --from=builder /app/out/full/ .

# Запускаємо збірку
RUN cd apps/landing && npm run build

FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Don't run production as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

# Копіюємо необхідні файли для запуску
COPY --from=installer --chown=nextjs:nodejs /app/apps/landing/.next/standalone ./
COPY --from=installer --chown=nextjs:nodejs /app/apps/landing/.next/static ./apps/landing/.next/static
COPY --from=installer --chown=nextjs:nodejs /app/apps/landing/public ./apps/landing/public

# Створення символічного посилання для package.json (потрібно для ES модулів)
COPY --from=installer --chown=nextjs:nodejs /app/apps/landing/package.json ./apps/landing/

# Відкриття порту
EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Використовуємо JSON-формат для CMD, щоб уникнути проблем з сигналами ОС
CMD ["node", "apps/landing/server.js"]