from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import app, bcrypt, DATABASE
from flask import flash, session
from flask_app.models import model_user

import re

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

class Recipe:
    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.description = data['description']
        self.instructions = data['instructions']
        self.date_made = data['date_made']
        self.under_30 = data['under_30']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.user_id = session['uuid']

        #CREATE

    @classmethod
    def create_recipe(cls, data):
        query = 'INSERT INTO recipes (name, description, instructions, date_made, under_30, user_id) VALUES (%(name)s, %(description)s, %(instructions)s, %(date_made)s, %(under_30)s, %(user_id)s);'
        return connectToMySQL(DATABASE).query_db(query, data)

    #READ

    @classmethod
    def get_all_recipes(cls):
        query = 'SELECT * FROM recipes LEFT JOIN users ON recipes.user_id = users.id;'
        recipes_from_db = connectToMySQL(DATABASE).query_db(query)
        if not recipes_from_db:
            return []
        recipes = []
        for dict in recipes_from_db:
            recipe_actual = cls(dict)
            user_info = {
                **dict,
                'id': dict['users.id'],
                'created_at': dict['users.created_at'],
                'updated_at': dict['users.updated_at'],
            }
            recipe_actual.user = model_user.User(user_info)
            recipes.append(recipe_actual)
        print(recipes)
        return recipes

    @classmethod
    def get_one_recipe(cls, data):
        query = 'SELECT * FROM recipes LEFT JOIN users ON users.id = recipes.user_id WHERE recipes.id = %(id)s;'
        result = connectToMySQL(DATABASE).query_db(query, data)
        if not result:
            return False
        recipe = cls(result[0])
        user_data = {
            'id': result[0]['users.id'],
            'first_name': result[0]['first_name'],
            'last_name': result[0]['last_name'],
            'email': result[0]['email'],
            'pw': result[0]['pw'],
            'created_at': result[0]['users.created_at'],
            'updated_at': result[0]['users.updated_at'],
        }
        recipe.creator = model_user.User(user_data)
        return recipe

    #UPDATE

    @classmethod
    def update_recipe(cls, data):
        query = 'UPDATE recipes SET name=%(name)s, description=%(description)s, instructions=%(instructions)s, date_made=%(date_made)s, under_30=%(under_30)s WHERE id = %(id)s;'
        recipe = connectToMySQL(DATABASE).query_db(query, data)
        return recipe
    
    #DELETE

    @classmethod
    def delete_recipe(cls, data):
        query = 'DELETE FROM recipes WHERE id = %(id)s;'
        recipe = connectToMySQL(DATABASE).query_db(query, data)
        return recipe

    #VALIDATIONS

    @staticmethod
    def validate_recipe(data):
        is_valid = True
        if len(data['name']) < 3:
            is_valid = False
            flash('Invalid Name', 'err_recipe')
        if len(data['description']) < 3:
            is_valid = False
            flash('Description is required.', 'err_recipe')
        if len(data['instructions']) < 3:
            is_valid = False
            flash('Instructions are required.', 'err_recipe')
        if not data['date_made']:
            is_valid = False
            flash('Date made/cooked required.', 'err_recipe')
        if not data['under_30']:
            is_valid = False
            flash('Cook time is under 30?', 'err_recipe')
        return is_valid

