from flask import Flask, render_template
app = Flask(__name__)

@app.route('/play')
def play():
    return render_template('index.html', boxes=3, color='darkcyan')

@app.route('/play/<integer>')
def play_int(integer):
    boxes = int(integer)
    return render_template('index.html', boxes = boxes, color='darkcyan')

@app.route('/play/<integer>/<color>')
def play_color_int(integer, color):
    boxes = int(integer)
    bcolor = color
    return render_template('index.html', boxes = boxes, color = bcolor)

if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True)    # Run the app in debug mode.

