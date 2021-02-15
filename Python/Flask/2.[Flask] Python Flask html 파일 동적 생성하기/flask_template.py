# flask_template.py
from flask import Flask, render_template # render_template import 해줌
app = Flask(__name__)

@app.route("/")
@app.route("/home")
def home():
    return render_template('home.html')
# 이렇게 간단히 html 경로만 입력해주면 됨.
# 여기서 루트 경로는 /templates 기준임

@app.route("/about")
def about():
    return render_template('about.html')

# route가 아닌 새로운 것! 해당하는 페이지가 없는 404에러가 났을때 함수 호출하게 해줌
@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html')

if __name__ == '__main__':
    app.run(debug=True)