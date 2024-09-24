FROM imbios/bun-node:1.1.20-20.12.2-alpine as build_static
WORKDIR /app
COPY package.json ./
RUN bun install
COPY . .
RUN cp .env.docker .env.local && \
    find /app -type f -name ".env.*" ! -name ".env.local" -exec rm {} \; && \
    bun run build
FROM nginx:1.27.0-alpine3.19
COPY nginx.conf /etc/nginx/nginx.conf
COPY entrypoint.sh ./
COPY --from=build_static /app/build /usr/share/nginx/html
RUN chmod +x entrypoint.sh
CMD /entrypoint.sh