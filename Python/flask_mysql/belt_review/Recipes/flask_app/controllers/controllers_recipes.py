# controllers.py
from flask_app import app
from flask import render_template,redirect,request,session,flash
from flask_app.models.model_user import User
from flask_app.models.model_recipe import Recipe

@app.route('/recipes')
def recipes():
    if not 'uuid' in session:
        return redirect('/')
    user_id = {
        'id': session['uuid']
    }
    user = User.get_one_user(user_id)
    all_recipes = Recipe.get_all_recipes()
    return render_template('recipes.html', user=user, recipes=all_recipes)

@app.route('/recipes/new')
def new_recipe():
    if not 'uuid' in session:
        return redirect('/')
    user = User.get_one_user({'id': session['uuid']})
    return render_template('new_recipe.html', user=user)

@app.route('/recipes/add', methods=['POST'])
def add_recipe():
    if not Recipe.validate_recipe(request.form):
        return redirect('/recipes/new')
    data = {
        **request.form,
        'user_id': session['uuid']
    }
    recipe_id = Recipe.create_recipe(data)
    return redirect('/recipes')

@app.route('/recipes/<int:id>')
def show_recipe(id):
    if not 'uuid' in session:
        return redirect('/')
    user = User.get_one_user({'id': session['uuid']})
    recipe = Recipe.get_one_recipe({'id': id})
    return render_template('show_recipe.html', user=user, recipe=recipe)

@app.route('/recipes/edit/<int:id>')
def edit_recipe(id):
    if not 'uuid' in session:
        return redirect('/')
    recipe = Recipe.get_one_recipe({'id': id})
    if session['uuid'] != recipe.creator.id:
        return redirect('/recipes')
    return render_template('edit_recipe.html', recipe=recipe)

@app.route('/recipes/update/<int:id>', methods=['POST'])
def update_recipe(id):
    if not 'uuid' in session:
        return redirect('/')
    if not Recipe.validate_recipe(request.form):
        return redirect(f'/recipes/edit/{id}')
    data = {
        **request.form,
        'id': id
    }
    recipe_id = Recipe.update_recipe(data)
    return redirect('/recipes')

@app.route('/recipes/delete/<int:id>')
def delete_recipe(id):
    if not 'uuid' in session:
        return redirect('/')
    recipe = Recipe.get_one_recipe({'id': id})
    if session['uuid'] != recipe.creator.id:
        del session['uuid']
        return redirect('/')
    recipe_id = Recipe.delete_recipe({'id': id})
    return redirect('/recipes')