# 연산자 and > or 우선순위

# 컴퓨터가 False로 인식하는 것들
"" # 빈 문자열
None # 아무것도 없는 빈값
0 # 숫자 0
[] # 비어있는 리스트, 딕셔너리, 튜플
{}
()

# True, False는 무슨값일까?
int(True)
int(False)
str(True)
str(False)
print(True.__str__())
if str(False):
    print("hi")
print(True + True)
# 비교문제에서 반환하는건?

# 숫자 number
1 and 0 or 1 and 1
1 and 1 or 0 and 1
0 and 1 or 0 and 1
0 or 1 or 0 and 1

# and or 과 비트연산자 & | 의 다른점
1 & 0 | 1 & 1
1 & 1 | 0 & 1
0 & 1 | 0 & 1
0 | 1 | 0 & 1

# 문자열 반환
"python" and ""
"python" or ""
"" or "python"

# 단락 평가