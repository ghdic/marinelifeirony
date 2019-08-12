from flask import Flask, render_template, url_for
app = Flask(__name__)

app.config['SECRET_KEY'] = ''
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
    }
]

title = "나도 몰라"
@app.route("/")
@app.route("/home")
def home():
    return render_template('home.html', title=title, posts=posts)


@app.route("/about")
def about():
    return render_template('about.html')


if __name__ == '__main__':
    app.run(debug=True)

# render_template 은 html 파일을 읽어들여와 화면에 띄워줄 수 있게해줌
# 경로는 templates 폴더가 root로 되므로 templates 폴더를 만들어서 넣어주자
# py 있는 폴더에 html 파일이 있으면 flask jinja2.exceptions.templatenotfound 에러남
# jinja2는 파이썬 템플릿 엔진이다
# 설명 https://codeburst.io/jinja-2-explained-in-5-minutes-88548486834e
# end if, end for 로 구문이 끝났음을 반드시 명시해줘야함
# content block 을 이용한 특정 부분 소스 옮기기