FROM node
WORKDIR /app
EXPOSE 3000

COPY package*.json ./

RUN npm install

COPY server.js .

ENTRYPOINT ["node", "/app/server.js"]