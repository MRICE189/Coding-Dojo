# controllers.py
from flask_app import app
from flask import render_template,redirect,request,session,flash
from flask_app.models.user import User

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/read')
def read():
    users = User.get_all_users()
    print(users)
    return render_template('read.html', users=users)

@app.route('/create', methods=['POST'])
def create_user():
    data = {
        'first_name': request.form['first_name'],
        'last_name': request.form['last_name'],
        'email': request.form['email']
    }
    User.create_user(data)
    return redirect('/read')

@app.route('/show/<int:id>')
def show_user(id):
    user_id = {'id': id}
    user = User.get_one_user(user_id)
    print(user)
    return render_template('user.html', user=user)

@app.route('/delete/<int:id>')
def delete_user(id):
    user_id = {'id': id}
    user = User.delete_user(user_id)
    print(user)
    return redirect('/read')

@app.route('/edit/<int:id>')
def show_edit_user(id):
    user_id = {'id': id}
    data = User.get_one_user(user_id)
    print(data)
    return render_template('edit.html', user=data)

@app.route('/update/<int:id>', methods=['POST'])
def update_user(id):
    data = {
        'id': id,
        'first_name': request.form['first_name'],
        'last_name': request.form['last_name'],
        'email': request.form['email']
    }
    user = User.update_user(data)
    return redirect('/read')