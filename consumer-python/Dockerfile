FROM python:3.8-slim-buster

ENV APP_HOME /consumer-python

WORKDIR $APP_HOME

ADD src .

RUN pip install flask

CMD [ "python3", "./src/app.py" ]
