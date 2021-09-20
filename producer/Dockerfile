FROM node:14.17-alpine3.13

RUN apk add --no-cache bash
RUN wget -O /bin/wait-for-it.sh https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh
RUN chmod +x /bin/wait-for-it.sh

ENV APP_HOME /producer

WORKDIR $APP_HOME

ADD package.json ./
ADD src .

RUN npm install

CMD ["npm", "start"]