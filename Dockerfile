FROM node:12-slim

WORKDIR /app
RUN npm install -g node-gyp
COPY package*.json ./
RUN npm install

COPY . .
EXPOSE 3001
CMD [ "node", "bin/www" ]