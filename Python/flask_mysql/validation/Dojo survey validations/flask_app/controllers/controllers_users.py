# controllers.py
from flask_app import app
from flask import render_template,redirect,request,session,flash
from flask_app.models.user import User

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/results/<int:id>')
def results(id):
    user = User.get_one_user({'id': id})
    return render_template('results.html', user=user)

@app.route('/submit', methods=['POST'])
def submit():
    if not User.validate_user(request.form):
        return redirect('/')
    data = {
        **request.form
    }
    user = User.create_user(data)
    return redirect(f'/results/{user}')

