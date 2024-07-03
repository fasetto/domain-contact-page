FROM node:alpine AS builder

WORKDIR /app

RUN apk add --no-cache gcompat && \
  npm install pnpm -g

COPY package*.json ./

RUN pnpm install

COPY . .
RUN pnpm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
