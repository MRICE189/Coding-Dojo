from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import app, bcrypt, DATABASE
from flask_app.models import model_user, model_message_has_user
from flask import session, flash

class Message:
    def __init__(self, data):
        self.id = data['id']
        self.content = data['content']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.sender = data['sender']

    @classmethod
    def leave_message(cls, data):
        query = 'INSERT INTO messages (content) VALUES (%(content)s);'
        return connectToMySQL(DATABASE).query_db(query, data)

    @classmethod
    def delete_message(cls, data):
        query = 'DELETE FROM messages WHERE id = %(id)s'
        message = connectToMySQL(DATABASE).query_db(query,data)
        return message

    @staticmethod
    def validate_message(data):
        is_valid = True
        if len(data['content']) < 5:
            is_valid = False
            flash('Messages must be 5 or more characters!', 'err_message')
        return is_valid

    @classmethod
    def count_messages(cls, data):
        query = 'SELECT count(messages.id) as count FROM messages LEFT JOIN messages_has_users ON messages.id = messages_has_users.message_id WHERE user_id = %(user_id)s;'
        count_received = connectToMySQL(DATABASE).query_db(query, data)
        if not count_received:
            return 0
        return count_received[0]
    
    @classmethod
    def count_sent(cls, data):
        query = 'SELECT count(messages.id) as count FROM messages LEFT JOIN messages_has_users ON messages.id = messages_has_users.message_id WHERE sender_id = %(sender_id)s;'
        count_sent = connectToMySQL(DATABASE).query_db(query, data)
        print(count_sent)
        if not count_sent:
            return 0
        return count_sent[0]
