# flask_template.py
from flask import Flask, render_template
app = Flask(__name__)

posts = [
    {
        'author':'Corey Schafer',
        'title':'Blog Post 1',
        'content' : 'First post content',
        'date_posted':'April 20, 2019'
    },
    {
        'author':'Jane Schafer',
        'title':'Blog Post 2',
        'content' : 'Second post content',
        'date_posted':'April 27, 2019'
    },

    {
        'author':'marine life',
        'title':'Blog Post 3',
        'content' : 'Third post content',
        'date_posted':'June 27, 2019'
    }
]

@app.route("/")
@app.route("/home")
def home():
    return render_template('home.html', title="My Home", posts=posts)

@app.route("/about")
def about():
    return render_template('about.html')

@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html')

if __name__ == '__main__':
    app.run(debug=True)