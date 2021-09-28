FROM python

RUN wget -O /bin/wait-for-it.sh https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh
RUN chmod +x /bin/wait-for-it.sh

ENV APP_HOME /consumer-python

WORKDIR $APP_HOME

ADD src .

RUN pip install pika --upgrade

CMD [ "python3", "-u", "./src/app.py" ]
