FROM node:lts-alpine

WORKDIR /app

COPY *.json ./

RUN npm install

COPY src src

EXPOSE 4000

CMD ["npm", "run", "dev"]