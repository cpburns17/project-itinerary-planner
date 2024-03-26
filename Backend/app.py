import os
# from flask import Flask, make_response, jsonify, request, session
# from flask_sqlalchemy import SQLAlchemy
# from flask_migrate import Migrate
# from flask_cors import CORS
# from flask_bcrypt import Bcrypt;
# import requests
# import datetime
# from models import db, User, Trips


# app = Flask(__name__)
# CORS(app, resources={r"/*": {"origins": "*"}})
# app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///app.db"
# app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
# app.json.compact = False
# bcrypt = Bcrypt(app)
# migrate = Migrate(app, db)


from openai import OpenAI
from dotenv import load_dotenv, find_dotenv, dotenv_values
import prompts 


# load .env file
_ = load_dotenv(find_dotenv())
client = OpenAI(
    api_key=os.environ.get('OPENAI_API_KEY')
)

model = "gpt-3.5-turbo"
temperature = 0.8
max_tokens = 2000
topic = ""
system_message = prompts.system_message
prompt = prompts.generate_prompt()
messages=[
        {"role": "system", "content": system_message},
        {"role": "user", "content": prompt}
    ]


def get_response():
    completion = client.chat.completions.create(
        model=model,
        messages = messages,
        max_tokens = max_tokens
    )
    return completion.choices[0].message.content

print(get_response())


##############################

# GET USERs

# @app.get('/users')
# def get_users():
#     users = User.query.all()
#     return [u.to_dict() for u in users]

# # GET USER BY ID

# @app.get('/user/<int:id>')
# def get_user_by_id(id):
#     current_user = db.session.get(User, id)
#     if not current_user:
#         return {"error" : "User not found"}, 404
    
#     return current_user.to_dict(), 200

# # POST USER

# @app.post('/user')
# def create_user():
#     try:
#         data = request.json
#         new_user = User(
#             first = data.get('first'),
#             last = data.get('last'),
#             email = data.get('email'),
#             username = data.get('username'),
#             password = bcrypt.generate_password_hash(data.get('password')),
#         )
#         db.session.add(new_user)
#         db.session.commit()
#         session["user_id"] = new_user.id
#         return new_user.to_dict(), 201
    
#     except Exception as e:
#         return {"error": str(e)}, 400
    



db.init_app(app)

@app.get("/")
def index():
    return "Home"









if __name__ == "__main__":
    app.run(port=5555, debug=True)