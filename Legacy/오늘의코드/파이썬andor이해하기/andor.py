# # 연산자 and > or 우선순위

# and or 과 비트연산자 & | 의 다른점
# x = 7
# print(x > 5 and x < 10)
# print((x > 5) & (x < 10))
# print(4 and 10)
# print(4 and 10 or 20)
# print(4 and 10 and 20)
# print(4 & 10)
# 1 & 0 | 1 & 1
# 1 & 1 | 0 & 1
# 0 & 1 | 0 & 1
# 0 | 1 | 0 & 1


# # 컴퓨터가 False로 인식하는 것들
# "" # 빈 문자열
# None # 아무것도 없는 빈값
# 0 # 숫자 0
# [] # 비어있는 리스트, 딕셔너리, 튜플
# {}
# ()

# # True, False는 무슨값일까?
# print(int(True))
# print(int(False))
# print(str(True))
# print(str(False))
# print(True.__str__())
# if str(False):
#     print("False Str -> True")
# print(True + True)


# # 문자열 반환
# print("python" and "")
# print("python" or "")
# print("" or "python")


# False and False or "hello" or "world"
# # 단락 평가
# print(1 and 0 or 2 and 3)
# print(1 and 2 or 0 and 3)
# print(0 and 2 or 0 and 3)
# print(0 or 1 or 0 and 2)

try:
    output = eval("2*40/0")
except Exception as e:
    output = e
print(output)