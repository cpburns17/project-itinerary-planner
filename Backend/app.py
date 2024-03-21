import os
from flask import Flask, make_response, jsonify, request, session
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
import datetime
from flask_cors import CORS
import requests;
# from dotenv import dotenv_values
# from flask_bcrypt import Bcrypt;
from models import db, User, Trips


app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///app.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
# app.secret_key = config['']
# app.json.compact = False
# bcrypt = Bcrypt(app)
migrate = Migrate(app, db)


db.init_app(app)

@app.get("/")
def index():
    return "Home"






if __name__ == "__main__":
    app.run(port=5555, debug=True)