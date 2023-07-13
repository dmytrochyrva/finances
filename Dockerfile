FROM node:18 as node

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build --prod

FROM nginx:latest

COPY --from=node /app/dist/ /usr/share/nginx/html

EXPOSE 80
