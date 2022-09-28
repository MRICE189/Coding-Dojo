from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def eight_by_eight(columns=8, rows=8, color1='blue', color2='gray'):
    return render_template('index.html', rows=rows, columns=columns, color1='blue', color2='gray')

@app.route('/4')
def eight_by_four(columns=8, rows=4, color1='blue', color2='gray'):
    return render_template('index.html', rows=rows, columns=columns, color1='blue', color2='gray')

@app.route('/<columns>/<rows>')
def x_by_y(columns=8, rows=8, color1='blue', color2='gray'):
    row_num = int(rows)
    column_num = int(columns)
    return render_template('index.html', rows=row_num, columns=column_num, color1='blue', color2='gray')

@app.route('/<columns>/<rows>/<color1>/<color2>')
def x_by_y_colors(columns=8, rows=8, color1='blue', color2='gray'):
    row_num = int(rows)
    column_num = int(columns)
    return render_template('index.html', color1=color1, color2=color2, rows=row_num, columns=column_num)

if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True)    # Run the app in debug mode.
