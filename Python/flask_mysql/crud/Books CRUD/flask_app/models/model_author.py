from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import app, bcrypt, DATABASE
from flask_app.models import model_book
import re

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

class Author:
    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.favorites = []

    @classmethod
    def create_author(cls, data):
        query = 'INSERT INTO authors (name) VALUES (%(name)s);'
        author_id = connectToMySQL(DATABASE).query_db(query, data)
        return author_id

    @classmethod
    def get_all_authors(cls):
        query = 'SELECT * FROM authors;'
        all_results = connectToMySQL(DATABASE).query_db(query)
        if not all_results:
            return []
        all_authors = []
        for dict in all_results:
            author_instance = cls(dict)
            all_authors.append(author_instance)
        return all_authors

    @classmethod
    def get_one_author(cls, data:dict):
        query = 'SELECT * FROM authors LEFT JOIN favorites ON authors.id = favorites.author_id LEFT JOIN books ON favorites.book_id = books.id WHERE authors.id = %(id)s;'
        result = connectToMySQL(DATABASE).query_db(query, data)
        if not result:
            return False
        author = cls(result[0])
        for favorite in result:
            favorite_data = {
                'id': favorite['books.id'],
                'title': favorite['title'],
                'num_pages': favorite['num_pages'],
                'created_at': favorite['books.created_at'],
                'updated_at': favorite['books.updated_at']
            }
            author.favorites.append(model_book.Book(favorite_data))
        return author

    @classmethod
    def get_available(cls, data):
        query = 'select * from authors join favorites on authors.id = favorites.author_id join books on favorites.book_id = books.id where authors.id not in (select favorites.author_id as author from favorites where book_id = %(id)s) group by authors.name;'
        results = connectToMySQL(DATABASE).query_db(query, data)
        print(results)
        if not results:
            return []
        available_authors = []
        for dict in results:
            author_instance = cls(dict)
            available_authors.append(author_instance)
        return available_authors


