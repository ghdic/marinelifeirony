# 포트포워딩시 set FLASK_APP=Flask.py (리눅스시 set -> export)
# 포트포워딩 내부 포트 5000, 외부 포트 80 열어주면됨
# pip install flask



# render_template 은 html 파일을 읽어들여와 화면에 띄워줄 수 있게해줌
# 경로는 templates 폴더가 root로 되므로 templates 폴더를 만들어서 넣어주자
# py 있는 폴더에 html 파일이 있으면 flask jinja2.exceptions.templatenotfound 에러남
# jinja2는 파이썬 템플릿 엔진이다
# 설명 https://codeburst.io/jinja-2-explained-in-5-minutes-88548486834e
# end if, end for 로 구문이 끝났음을 반드시 명시해줘야함
# content block 을 이용한 특정 부분 소스 옮기기
# pip install flask-sqlalchemy
# pip install flask-bcryt

# from flask_bcrypt import Bcrypt
# bcrypt = Bcrypt()
# hash_pw = bcrypt.generate_password_hash("key")  # 키 생성
# print(bcrypt.check_password_hash(hash_pw, "key"))  # 해쉬값이랑 키를 통해 대조

# pip install flask-login