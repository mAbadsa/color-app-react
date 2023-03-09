FROM node:14-alpine as build
WORKDIR /app
COPY . .
# RUN npm install -g yarn
RUN yarn install
RUN yarn build

FROM nginx
COPY --from=build /app/build /usr/share/nginx/html

# RUN rc-service nginx start

EXPOSE 3000
