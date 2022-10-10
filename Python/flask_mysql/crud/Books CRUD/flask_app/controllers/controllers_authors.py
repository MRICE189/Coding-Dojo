# controllers.py
from flask_app import app
from flask import render_template,redirect,request,session,flash
from flask_app.models.model_author import Author
from flask_app.models.model_book import Book
from flask_app.models.model_favorite import Favorite

@app.route('/authors')
def index():
    results = Author.get_all_authors()
    return render_template('index.html', authors=results)

@app.route('/authors/create', methods=['POST'])
def create_author():
    author_id = Author.create_author(request.form)
    return redirect(f'/authors/{author_id}')

@app.route('/authors/<int:id>')
def display_author(id):
    author = Author.get_one_author({'id': id})
    books = Book.get_all_books()
    available_books = Book.get_available({'id': id})
    return render_template('author.html', author=author, books=books, available_books=available_books)

@app.route('/authors/favorite', methods=['POST'])
def favorite_a_book():
    data = {
        'author_id': request.form['id'],
        'book_id': request.form['book_id']
    }
    print(data)
    author = request.form['id']
    Favorite.add_favorite_book(data)
    return redirect(f'/authors/{author}')