FROM node:alpine as build

WORKDIR /app 
COPY . . 
RUN yarn 
RUN npm run build 

FROM nginx:1.23 

COPY ./nginx.conf /etc/nginx/nginx.conf 
COPY --from=build /app/build /usr/share/nginx/html
