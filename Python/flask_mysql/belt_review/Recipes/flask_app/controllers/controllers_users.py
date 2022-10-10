# controllers.py
from flask_app import app, bcrypt
from flask import render_template,redirect,request,session,flash
from flask_app.models.model_user import User

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/users/register', methods=['POST'])
def create_user():
    if not User.validate_user(request.form):
        return redirect('/')
    hash_pw = bcrypt.generate_password_hash(request.form['pw'])
    data = {
        **request.form,
        'pw': hash_pw
    }
    print(data)
    user_id = User.create_user(data)
    print(user_id)
    session['uuid'] = user_id
    return redirect('/recipes')
    
@app.route('/users/login', methods=['POST'])
def login():
    if not User.validate_login(request.form):
        return redirect('/')
    return redirect('/recipes')

@app.route('/logout')
def logout():
    if 'uuid' in session:
        del session['uuid']
    return redirect('/')


