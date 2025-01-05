from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
#hello
app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# MongoDB connection
client = MongoClient('mongodb+srv://bentuv:XVoMEML49itDKRmQ@elysiancluster.ltcol.mongodb.net/?retryWrites=true&w=majority&appName=ElysianCluster')
db = client['elysian_db']  # Set your database name
users_collection = db['users']

@app.route('/api/login', methods=['POST'])
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
    app.run(host='0.0.0.0', port=5000, debug=True)  # Added debug=True for development
