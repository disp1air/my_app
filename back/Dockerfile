FROM python:3.9

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY requirements.txt /usr/src/app
RUN pip install -r requirements.txt

COPY flaskblog.py /usr/src/app
COPY templates /usr/src/app/templates

EXPOSE 5000

CMD ["python", "flaskblog.py"]