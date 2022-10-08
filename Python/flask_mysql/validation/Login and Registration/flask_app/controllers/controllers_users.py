# controllers.py
from flask_app import app, bcrypt
from flask import render_template,redirect,request,session,flash
from flask_app.models.model_user import User

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/success')
def success():
    if 'uuid' not in session:
        return redirect('/')
    return render_template('success.html')

@app.route('/logout')
def logout():
    if 'uuid' in session:
        del session['uuid']
    return redirect('/')

@app.route('/register', methods=['POST'])
def register():
    #validate info
    if not User.validate_user(request.form):
        return redirect('/')
    #create_user method
    pw_hash = bcrypt.generate_password_hash(request.form['pw'])
    data = {
        'first_name': request.form['first_name'],
        'last_name': request.form['last_name'],
        'email': request.form['email'],
        'pw': pw_hash
    }
    user_id = User.create_user(data)
    session['uuid'] = user_id
    return redirect('/')

@app.route('/login', methods=['POST'])
def login():
    #validate info
    if not User.validate_login(request.form):
        return redirect('/')
    return redirect('/success')