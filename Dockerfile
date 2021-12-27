# syntax=docker/dockerfile:1
FROM node:14.18.2-slim

WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
COPY src ./

RUN npm install

EXPOSE 3000

CMD "npm" "start"
