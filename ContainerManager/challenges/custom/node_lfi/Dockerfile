FROM phusion/baseimage:latest

CMD ["/sbin/my_init"]

RUN apt-get update && apt-get -y install nodejs npm

RUN npm install nodeunit fs express url

# Create app directory
RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/

RUN npm install

# Bundle app source
COPY . /usr/src/app

EXPOSE 8080

RUN apt-get install nodejs-legacy

RUN mkdir /etc/service/nodejs

RUN echo '#!/bin/bash\ncd /usr/src/app\nexec npm start' > /etc/service/nodejs/run

RUN chmod a+x /etc/service/nodejs/run
