from datetime import timedelta
from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from app import db
from models import User


# Create a blueprint for the routes
routes = Blueprint('routes', __name__)

# USER ROUTES
# User registration route
@routes.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    username = data.get('username')
    email = data.get('email')  # Add email field
    password = data.get('password')

    # Validate input
    if not username or not email or not password:
        return jsonify({"msg": "Username, email, and password are required"}), 400

    # Check if the user already exists
    if User.query.filter_by(username=username).first():
        return jsonify({"msg": "User already exists"}), 400

    # Create a new user
    new_user = User(username=username, email=email)
    new_user.set_password(password)  # Hash the password
    db.session.add(new_user)
    db.session.commit()

    return jsonify({"msg": "User created successfully"}), 201


# Login route
@routes.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    # Check if the user exists
    user = User.query.filter_by(username=username).first()
    if not user:
        return jsonify({"msg": "User does not exist"}), 404

    # Check if the password is correct
    if not user.check_password(password):
        return jsonify({"msg": "Incorrect password"}), 401

    # Generate access token if login is successful
    access_token = create_access_token(identity=str(user.id), expires_delta=timedelta(hours=12))
    print(f"User ID: {user.id}")
    return jsonify({"access_token": access_token, "user_id": user.id}), 200


# Route to get the user's profile
@routes.route('/profile', methods=['GET'])
@jwt_required()
def get_profile():
    user_id = get_jwt_identity()  # Get the user ID from the JWT token
    user = User.query.get(user_id)
    if not user:
        return jsonify({"msg": "User not found"}), 404
    return jsonify({
        "id": user.id,
        "username": user.username,
        "email": user.email,
        "created_at": user.created_at.isoformat()
    }), 200


# Route to update the user's profile
@routes.route('/profile', methods=['PUT'])
@jwt_required()
def update_profile():
    user_id = get_jwt_identity()  # Get the user ID from the JWT token
    user = User.query.get(user_id)
    if not user:
        return jsonify({"msg": "User not found"}), 404

    data = request.get_json()
    username = data.get('username')
    email = data.get('email')

    # Validate input
    if not username or not email:
        return jsonify({"msg": "Username and email are required"}), 400

    # Update user information
    user.username = username
    user.email = email
    db.session.commit()

    return jsonify({"msg": "Profile updated successfully"}), 200


# Route to get any user's profile by ID
@routes.route('/users/<int:user_id>', methods=['GET'])
@jwt_required()
def get_user_profile(user_id):
    user = User.query.get(user_id)
    if not user:
        return jsonify({"msg": "User not found"}), 404
    return jsonify({
        "id": user.id,
        "username": user.username,
        "email": user.email,
        "created_at": user.created_at.isoformat()
    }), 200


# Route to get all user profiles
@routes.route('/users', methods=['GET'])
@jwt_required()
def get_all_users():
    users = User.query.all()
    return jsonify([{"id": user.id, "username": user.username} for user in users]), 200


# POLICIES ROUTES
# Route to get all policies
@routes.route('/policies', methods=['GET'])
@jwt_required()
def get_policies():
    user_id = get_jwt_identity()  # Get the user ID from the JWT token
    user = User.query.get(user_id)
    if not user:
        return jsonify({"msg": "User not found"}), 404

    # Example: Fetch policies from a hypothetical Policy model
    policies = Policy.query.filter_by(user_id=user_id).all()
    return jsonify([{
        "id": policy.id,
        "title": policy.title,
        "created_at": policy.created_at.isoformat()
    } for policy in policies]), 200


