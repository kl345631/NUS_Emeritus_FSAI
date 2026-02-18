from flask import Flask
from flask import render_template
from flask import request
import sqlite3

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/viewAllProducts')
def viewAllProducts():
    conn = sqlite3.connect('./db/products.db')
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM products')
    products = cursor.fetchall()
    conn.close()
    return render_template('viewAllProducts.html')