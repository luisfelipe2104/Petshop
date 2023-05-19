FROM python:3.9-slim-buster

COPY . .

# COPY ./database.sqlite3 ./database.sqlite3
# COPY ./main.py ./main.py
COPY ./requirements.txt ./requirements.txt

RUN pip install -r requirements.txt

EXPOSE 5000

CMD ["gunicorn", "--bind", ":5000", "petshop.wsgi:application"]

# sudo docker build -t fastapi .
# sudo docker run -p 3000:5000 fastapi
# http://localhost:3000/docs