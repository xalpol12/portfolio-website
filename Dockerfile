FROM node:20-alpine as build
WORKDIR /usr/local/app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
FROM nginx:stable-alpine
COPY --from=build /usr/local/app/dist/portfolio-website /usr/share/nginx/html
COPY /nginx.conf /etc/nginx/nginx.conf