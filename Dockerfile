FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV NODE_ENV production

RUN npm run build

# Port
EXPOSE 3000

CMD ["npm", "start"]
