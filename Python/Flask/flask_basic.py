from flask import Flask
app = Flask(__name__)

@app.route("/")
@app.route("/home")
def hello():
    return "<h1>Hello World!</h1>"

@app.route("/about")
def about():
    return "<h1>About Page</h1>"


if __name__ == '__main__':
    app.run(debug=True)

# window cmd 창에서 set FLASK_APP=test.py -> 변수 설정
# linux export FLASK_APP=test.py
# flask run
# html 태그 먹힘
# flask run 으로할땐 메인으로 실행 x
# python test.py 로 로컬로 실행할때만 메인으로 들어감감
# 디버그 모드로 하면 수정하는거 실시간 반영되는듯
