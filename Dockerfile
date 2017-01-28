FROM node:6

COPY . /usr/src/app
WORKDIR /usr/src/app

# install dependencies
RUN npm install

EXPOSE 3000
CMD [ "node", "server.js" ]
