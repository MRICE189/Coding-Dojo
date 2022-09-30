from flask import Flask, render_template, request, redirect, session
import random
app = Flask(__name__)
app.secret_key = 'caelumS'

@app.route('/')
def index():
    session['gold'] = 0
    session['activities'] = []
    return render_template('index.html')

@app.route('/visit')
def visit():
    return render_template('/visit.html')

@app.route('/reset', methods=['POST'])
def reset():
    session.clear
    return redirect('/')

@app.route('/process_money', methods=['POST'])
def process_money():
    if request.form['visit'] == 'farm':
        gold_found = random.randint(10, 20)
        session['gold'] += gold_found
        session['activities'].append(f"<p class='win'>You found {gold_found} gold at the farm!</p>")
    elif request.form['visit'] == 'cave':
        gold_found = random.randint(5, 10)
        session['gold'] += gold_found
        session['activities'].append(f"<p class='win'>You found {gold_found} gold in the cave!</p>")
    elif request.form['visit'] == 'house':
        gold_found = random.randint(2, 5)
        session['gold'] += gold_found
        session['activities'].append(f"<p class='win'>You found {gold_found} gold at the house!</p")
    elif request.form['visit'] == 'casino':
        gold_found = random.randint(-50, 50)
        session['gold'] += gold_found
        if gold_found > 0:
            session['activities'].append(f"<p class='win'>You found {gold_found} gold at the casino!</p>")
        else:
            session['activities'].append(f"<p class='lose'>You lost {gold_found * -1} gold at the casino!</p>")
    return redirect('/visit')

if __name__=="__main__":
    app.run(debug=True)  