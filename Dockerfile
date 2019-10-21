FROM node:lts-alpine as build
WORKDIR /app
COPY ["package*", "./"]
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine as serve
COPY --from=build /app/public /usr/share/nginx/html
COPY nginx /etc/nginx

