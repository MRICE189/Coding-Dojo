from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = 'caelumS'

@app.route('/')
def display_index():
    session['count'] = 1
    session['visits'] = 1
    return render_template('index.html')

@app.route('/counted')
def display_counted():
    return render_template('counted.html')

@app.route('/count', methods=['POST'])
def count():
    session['count'] += 1
    session['visits'] += 1
    return redirect('/counted')

@app.route('/count2', methods=['POST'])
def count2():
    session['count'] += 2
    session['visits'] += 1
    return redirect('/counted')

@app.route('/countX', methods=['POST'])
def countX():
    session['count'] += int(request.form['count_increase'])
    session['visits'] += 1
    return redirect('/counted')

@app.route('/reset', methods=['POST'])
def destroy_count():
    session.clear()
    return redirect('/')

if __name__=="__main__":
    app.run(debug=True)  