from flask import Flask, render_template, request, jsonify
import psycopg2
import sys

app = Flask(__name__)


@app.route('/')
@app.route('/home')
def home():
    return render_template('home.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/api')
def back_about():
    return "Back"

@app.route('/api/db', methods=['POST'])
def db():
    con = psycopg2.connect(
        database="bobdb",
        user="bob",
        password="P@$$w0rd"
    )

    cur = con.cursor()
    cur.execute("insert into products (product_no, name, price) values (13, 'milk', 1.5)")
    cur.close()
    con.close()

@app.route('/api', methods=['POST'])
def get_post_params():
    request_data = request.get_json()
    return request_data

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
