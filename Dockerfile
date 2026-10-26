
# syntax=docker/dockerfile:1

# 1. Base image
FROM node:22-alpine AS base

ENV NEXT_TELEMETRY_DISABLED=1

# 2. Install dependencies
FROM base AS deps

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

# 3. Build application
FROM base AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# 4. Production runtime
FROM base AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# Create a non-root user
RUN addgroup -S -g 1001 nodejs \
    && adduser -S -u 1001 nextjs

# Copy standalone build output
COPY --from=builder --chown=nextjs:nodejs \
    /app/public ./public

COPY --from=builder --chown=nextjs:nodejs \
    /app/.next/standalone ./

COPY --from=builder --chown=nextjs:nodejs \
    /app/.next/static ./.next/static

# Prepare runtime cache directory
RUN mkdir -p .next \
    && chown nextjs:nodejs .next

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
