FROM node:20 AS build

COPY package*.json ./
RUN npm install

COPY . .

FROM node:20

COPY --from=build /usr/src/app /usr/src/app

WORKDIR /usr/src/app

CMD ["npm", "start"]