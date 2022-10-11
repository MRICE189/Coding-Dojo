# controllers.py
from flask_app import app, bcrypt
from flask import render_template,redirect,request,session,flash
from flask_app.models.model_user import User
from flask_app.models.model_message import Message
from flask_app.models.model_message_has_user import MessageHasUser

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/users/messages')
def user_messages():
    if 'uuid' not in session:
        return redirect('/')
    user_id = session['uuid']
    count_received = Message.count_messages({'user_id': user_id})
    count_sent = Message.count_sent({'sender_id': user_id})
    context = {
        'user': User.get_one_user({'id': user_id}),
        'other_users': User.get_all_users()
    }
    return render_template('user_messages.html', **context, count_received=count_received, count_sent=count_sent)

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
    return redirect('/users/messages')
    
@app.route('/users/login', methods=['POST'])
def login():
    if not User.validate_login(request.form):
        return redirect('/')
    return redirect('/users/messages')

@app.route('/logout')
def logout():
    if 'uuid' in session:
        del session['uuid']
    return redirect('/')