# controllers.py
from flask_app import app
from flask import render_template,redirect,request,session,flash
from flask_app.models.model_user import User
from flask_app.models.model_message import Message
from flask_app.models.model_message_has_user import MessageHasUser

@app.route('/messages/leave_message/<int:id>', methods=['POST'])
def leave_message(id):
    if not Message.validate_message(request.form):
        return redirect('/users/messages')
    message_id = Message.leave_message(request.form)
    # user_id = id
    # sender_id = session['uuid']
    message_with_users_data = {
        'message_id': message_id,
        'user_id': id,
        'sender_id': session['uuid']
    }
    message_info = MessageHasUser.leave_message_with_info(message_with_users_data)
    return redirect('/users/messages')

@app.route('/messages/delete/<int:id>')
def delete_message(id):
    message_deleted = Message.delete_message({'id': id})
    return redirect('/users/messages')