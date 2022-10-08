from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import app, bcrypt, DATABASE
from flask import flash, session
import re

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

class User:
    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.pw = data['pw']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def create_user(cls, data):
        query = 'INSERT INTO users (first_name, last_name, email, pw) VALUES (%(first_name)s, %(last_name)s, %(email)s, %(pw)s);'
        return connectToMySQL(DATABASE).query_db(query, data)

    @classmethod
    def get_by_email(cls, data):
        query = 'SELECT * FROM users WHERE email = %(email)s;'
        result = connectToMySQL(DATABASE).query_db(query, data)
        if not result:
            return False
        return cls(result[0])

    @staticmethod
    def validate_user(data):
        is_valid = True
        if len(data['first_name']) < 2 and str.isalpha(data['first_name']):
            is_valid = False
            flash('Invalid First Name', 'err_user')
        if len(data['last_name']) < 2 and str.isalpha(data['last_name']):
            is_valid = False
            flash('Invalid Last Name', 'err_user')
        if len(data['email']) < 1:
            is_valid = False
            flash('Invalid Email', 'err_user')
        elif not EMAIL_REGEX.match(data['email']):
            is_valid = False
            flash('Invalid Email', 'err_user')
        if len(data['pw']) < 8:
            is_valid = False
            flash('Invalid Password', 'err_user')
        if data['pw'] != data['pw_confirm']:
            is_valid = False
            flash('PWs do not match!', 'err_user')
        if is_valid:
            potential_user = User.get_by_email({'email': data['email']})
            if potential_user:
                flash('Email already taken, sorry!', 'err_user')
                is_valid = False
        return is_valid

    @staticmethod
    def validate_login(data):
        is_valid = True
        if len(data['email']) < 1:
            is_valid = False
            flash('Invalid Email', 'err_login')
        elif not EMAIL_REGEX.match(data['email']):
            is_valid = False
            flash('Invalid Email', 'err_login')
        if len(data['pw']) < 8:
            is_valid = False
            flash('Invalid Password length.', 'err_login')
        if is_valid:
            potential_user = User.get_by_email({'email': data['email']})
            if not potential_user:
                flash('Email not found', 'err_login')
                is_valid = False
            else:
                if not bcrypt.check_password_hash(potential_user.pw, data['pw']):
                    flash('Wrong password', 'err_login')
                    is_valid = False
                else:
                    session['uuid'] = potential_user.id
        return is_valid