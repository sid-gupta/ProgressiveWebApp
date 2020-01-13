from flask import Flask, render_template, url_for

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/inventoryAdd')
def inventory_add():
    return render_template('inventoryAdd.html')


@app.route('/sw.js')
def get_service_woker():
    return app.send_static_file('js/sw.js')


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
