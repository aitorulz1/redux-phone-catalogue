FROM node:1.19.2-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./

RUN npm install 

EXPOSE 3000

COPY . ./

CMD ["npm", "start"]

