import os
import certifi
from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
###trying to connect Mongo
app = Flask(__name__)
CORS(app)

mongo_uri = os.environ.get("MONGO_URI") or "mongodb+srv://bentuv:XVoMEML49itDKRmQ@elysiancluster.ltcol.mongodb.net/elysian_db?retryWrites=true&w=majority"
client = MongoClient(mongo_uri, tls=True, tlsCAFile=certifi.where())

db = client["elysian_db"]
users_collection = db["users"]

@app.route("/api/login", methods=["POST"])
def login():
    try:
        data = request.json
        email = data.get('email')
        password = data.get('password')

        # Add some logging to debug
        print(f"Received login request for email: {email}")
        print(f"Recieved login request for password: {password}")

        user = users_collection.find_one({'email': email})
        if user:
            print(f"User found in DB: {user}")
        else:
            print("no user was found")

        if user and user['password'] == password:
            return jsonify({'message': 'Login successful', 'user': {'email': user['email']}}), 200
        else:
            return jsonify({'message': 'Invalid email or password'}), 401
    except Exception as e:
        print(f"Error during login: {str(e)}")
        return jsonify({'message': 'Server error'}), 500

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))  # Default to 5000 locally
    app.run(host='0.0.0.0', port=port, debug=True)