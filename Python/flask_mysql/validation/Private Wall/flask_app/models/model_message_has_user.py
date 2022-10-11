from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import app, bcrypt, DATABASE
from flask_app.models import model_user, model_message

class MessageHasUser:
    def __init__(self, data):
        self.message_id = data['message_id']
        self.user_id = data['user_id']
        self.sender_id = data['sender_id']

    @classmethod
    def leave_message_with_info(cls, data):
        query = 'INSERT INTO messages_has_users (message_id, user_id, sender_id) VALUES (%(message_id)s, %(user_id)s, %(sender_id)s);'
        return connectToMySQL(DATABASE).query_db(query, data)



