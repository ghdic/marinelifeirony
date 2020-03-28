from datetime import datetime
from flaskquiz import db, login_manager
from flask_login import UserMixin

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    image_file = db.Column(db.String(60), nullable=False, default='default.jpg')
    password = db.Column(db.String(60), nullable=False)
    # grade = db.Column(db.Integer, nullable=False, default="3")  # 등급

    posts = db.relationship('Post', backref='author', lazy=True)  # 일대다 관계
    quizzes = db.relationship('Quiz', backref='author', lazy=True)  # 푼 문제 저장

    def __repr__(self):  # 객체를 출력할 수 있는 문자열 형태로 변환하여 돌려주는 함수
        return f"User('{self.username}', '{self.email}', '{self.image_file}')"

class Quiz(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    picture = db.Column(db.String(60), nullable=True)
    problem = db.Column(db.String(200), nullable=False)

    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    items = db.relationship('Item', backref='quiz', lazy=True)

    def __repr__(self):
        return f"Quiz('{self.picture}', '{self.problem}', '{self.items}')"

class Item(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    item = db.Column(db.String(200), nullable=False)

    quiz_id = db.Column(db.Integer, db.ForeignKey('quiz.id'),
                        nullable=False)

    def __repr(self):
        return f"Item('{self.item}')"

class Post(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    date_posted = db.Column(db.DateTime, nullable=False, default=datetime.now)
    content = db.Column(db.Text, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False) # ForeignKey는 외부 키를 정할때씀 객체이름 앞에 소문자로 해서 정함

    def __repr__(self):  # 객체를 출력할 수 있는 문자열 형태로 변환하여 돌려주는 함수
        return f"Post('{self.title}', '{self.date_posted}')"