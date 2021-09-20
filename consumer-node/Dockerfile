FROM node:14.17-alpine3.13

ENV APP_HOME /consumer-node

WORKDIR $APP_HOME

ADD package.json ./
ADD src .

RUN npm install

CMD ["npm", "start"]