
FROM node:16.17.0
WORKDIR /server

COPY package*.json ./
COPY . /server
RUN npm install 
EXPOSE 3000
CMD [ "npm", "start"] 