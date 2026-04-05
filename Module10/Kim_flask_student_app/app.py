from flask import Flask, render_template, request, redirect
import sqlite3

app = Flask(__name__)

def get_db_connection():
    conn = sqlite3.connect('student.db')
    conn.row_factory = sqlite3.Row
    return conn

conn = get_db_connection()
conn.execute("""
create table if not exists students (
    id Integer primary key autoincrement,
    name text,
    age integer
)
""")
conn.close

# homepage
@app.route('/') 
def index ():
    conn = get_db_connection()
    students = conn.execute('select * from students').fetchall()
    conn.close()
    return render_template('index.html', students=students)

# add form page
@app.route('/add')
def add():
    return render_template('add.html')

#post and inserts into student.db
@app.route('/add', methods = ['POST'])
def add_student():
    name = request.form['name']
    age = request.form['age']
    course = request.form['course']
    conn = get_db_connection()
    conn.execute(
        'INSERT INTO students (name, age, course) VALUES (?, ?, ?)',
        (name, age, course)
    )
    conn.commit()
    conn.close()
    return redirect('/') #returns to homepage

#delete action
@app.route('/delete/<int:id>')
def delete(id):
    conn = get_db_connection()
    conn.execute('DELETE FROM students WHERE id = ?', (id,))
    conn.commit()
    conn.close()
    return redirect('/')
    
if __name__== '__main__':
    app.run(debug=True)
