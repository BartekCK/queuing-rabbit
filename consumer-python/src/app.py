from flask import Flask
import os

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello user'

app.run(host='0.0.0.0', port=os.environ['PORT'], debug=True)
