from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import app, bcrypt, DATABASE
from flask_app.models import model_author
import re

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

class Book:
    def __init__(self, data):
        self.id = data['id']
        self.title = data['title']
        self.num_pages = data['num_pages']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.favorited_authors = []

    @classmethod
    def create_book(cls, data):
        query = 'INSERT INTO books (title, num_pages) VALUES (%(title)s, %(num_pages)s);'
        book_id = connectToMySQL(DATABASE).query_db(query, data)
        return book_id
    
    @classmethod
    def get_all_books(cls):
        query = 'SELECT * FROM books;'
        all_results = connectToMySQL(DATABASE).query_db(query)
        if not all_results:
            return []
        all_books = []
        print(all_results)
        for dict in all_results:
            book_instance = cls(dict)
            all_books.append(book_instance)
        return all_books
    
    @classmethod
    def get_one_book(cls, data):
        query = 'SELECT * FROM books LEFT JOIN favorites on books.id = favorites.book_id LEFT JOIN authors ON favorites.author_id = authors.id WHERE books.id = %(id)s;'
        result = connectToMySQL(DATABASE).query_db(query, data)
        if not result:
            return False
        book = cls(result[0])
        for favorited_author in result:
            favorited_author_data = {
                'id': favorited_author['authors.id'],
                'name': favorited_author['name'],
                'created_at': favorited_author['authors.created_at'],
                'updated_at': favorited_author['authors.updated_at']
            }
            book.favorited_authors.append(model_author.Author(favorited_author_data))
        return book


