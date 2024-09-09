from flask import Flask, render_template, jsonify

app = Flask(__name__)

light_state = {'on' : False}

@app.route('/')
def index ():
    return render_template('index.html')

@app.route('/toggle-light', methods=['POST'])
def toggle_light():
    global light_state
    light_state['on'] = not light_state['on']
    return jsonify(light_state)

if __name__ == '__main__':
    app.run(debug=True)