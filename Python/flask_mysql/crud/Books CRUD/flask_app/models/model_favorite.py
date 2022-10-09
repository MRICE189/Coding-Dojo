from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import app, bcrypt, DATABASE
import re

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

class Favorite:
    def __init__(self, data):
        self.author_id = data['author_id']
        self.book_id = data['book_id']

    @classmethod
    def add_favorite_book(cls, data):
        query = 'INSERT INTO favorites (author_id, book_id) VALUES (%(author_id)s, %(book_id)s);'
        favorite = connectToMySQL(DATABASE).query_db(query, data)
        return favorite