from app import db
from datetime import datetime, timezone
from werkzeug.security import generate_password_hash, check_password_hash


# User model
class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(200), nullable=False)
    created_at = db.Column(db.DateTime, default=lambda: datetime.now(timezone.utc))

    def set_password(self, password):
        self.password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def __repr__(self):
        # This is a special method that defines how the object is represented
        # when printed or logged. It returns a string representation of the object.
        # In this case, it returns the username of the user.
        # This is useful for debugging and logging purposes.
        return f'<User {self.username}>'
