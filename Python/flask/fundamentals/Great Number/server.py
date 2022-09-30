from random import random, randint
from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)
app.secret_key = 'caelumS'

@app.route('/')
def start_game(state='hidden'):
    session['random_num'] = randint(1,100)
    session['guess_count'] = 0
    return render_template('index.html', state=state)

@app.route('/guess', methods=['POST'])
def guess():
    session['guess_count'] += 1
    session['guess'] = request.form['guess']
    if int(session['guess']) == int(session['random_num']):
        return redirect('/win')
    elif int(session['guess_count']) == 5:
        return redirect('lose')
    elif int(session['guess']) < int(session['random_num']):
        return redirect('/low')
    elif int(session['guess']) > int(session['random_num']):
        return redirect('/high')
    
    

@app.route('/low')
def low(state='wrong'):
    remaining = 5 - int(session['guess_count'])
    content = f'Too low! {remaining} guesses remaining.'
    return render_template('guessed.html', state=state, content=content)
@app.route('/high')
def high(state='wrong'):
    remaining = 5 - int(session['guess_count'])
    content = f'Too high! {remaining} guesses remaining.'
    return render_template('guessed.html', state=state, content=content)
@app.route('/win')
def win(state='right'):
    content = 'You guessed correctly!'
    win_guesses = session['guess_count']
    return render_template('guessed.html', state=state, content=content, win=win_guesses)
@app.route('/lose')
def lose(state='wrong'):
    content = 'You lost!'
    return render_template('guessed.html', state=state, content=content)

@app.route('/reset', methods=['POST'])
def reset():
    session.clear()
    return redirect('/')

if __name__=="__main__":
    app.run(debug=True)  