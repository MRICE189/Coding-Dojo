# controllers.py
from flask_app import app
from flask import render_template,redirect,request,session,flash
from flask_app.models.model_author import Author
from flask_app.models.model_book import Book
from flask_app.models.model_favorite import Favorite

@app.route('/books')
def books():
    results = Book.get_all_books()
    return render_template('books.html', books=results)

@app.route('/books/create', methods=['POST'])
def create_book():
    book_id = Book.create_book(request.form)
    return redirect(f'/books/{book_id}')

@app.route('/books/<int:id>')
def display_book(id):
    book = Book.get_one_book({'id': id})
    authors = Author.get_all_authors()
    available_authors = Author.get_available({'id': id})
    return render_template('book.html', book=book, authors=authors, available_authors=available_authors)

@app.route('/books/favorite', methods=['POST'])
def favorite_author():
    data = {
        'author_id': request.form['author_id'],
        'book_id': request.form['id']
    }
    print(data)
    book = request.form['id']
    Favorite.add_favorite_book(data)
    return redirect(f'/books/{book}')
