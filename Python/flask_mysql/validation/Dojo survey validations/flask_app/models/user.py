from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash

class User:
    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.location = data['location']
        self.language = data['language']
        self.comment = data['comment']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def create_user(cls, data):
        print(data)
        query = 'INSERT INTO users (name, location, language, comment) VALUES ( %(name)s, %(location)s, %(language)s, %(comment)s );'
        return connectToMySQL('dojo_survey_db').query_db(query, data)

    @classmethod
    def get_one_user(cls, data):
        query = 'SELECT * FROM users WHERE id = %(id)s;'
        user = connectToMySQL('dojo_survey_db').query_db(query, data)
        if len(user) < 1:
            return False
        return cls(user[0])

    @staticmethod
    def validate_user(data):
        is_valid = True
        if len(data['name']) < 1:
            is_valid = False
            flash('Invalid name. Field is required.')
        if len(data['location']) < 1:
            is_valid = False
            flash('Invalid location. Field is required.')
        if len(data['language']) < 1:
            is_valid = False
            flash('Invalid language. Field is required.')
        if len(data['comment']) < 1:
            is_valid = False
            flash('Invalid comment. Field is required.')
        return is_valid