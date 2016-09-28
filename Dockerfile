FROM node:6

# Pull App
WORKDIR /usr/src
RUN git clone https://github.com/Waog/Pokemon-Go-Manager-REST-Server.git app
WORKDIR app

# install dependencies
RUN npm install

EXPOSE 3000
CMD [ "node", "server.js" ]
