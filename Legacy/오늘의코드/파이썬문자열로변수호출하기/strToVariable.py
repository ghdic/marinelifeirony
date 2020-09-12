# eval 함수의 취약점
command = input()
eval(command)

# eval 함수 사용
print("eval 이용")
a_0 = 10
a_1 = 20
a_2 = 30

print("a_0 ~ a_2 출력")
for i in range(3):
    eval(f"print(a_{i})")

ㄱ = "A"
ㄴ = "M"
ㄷ = "B"
ㄹ = "N"
s = 'ㄱㄴㄷㄹ'
print("ㄱㄴㄷㄹ 출력")
for i in s:
    eval(f"print({i})")

# 딕셔너리 이용하기
a = list('ㄱㄴㄷㄹ')
b = list('AMBN')
d = {key:value for key, value in zip(a, b)}

print("딕셔너리 이용")
for key in a: # a == d.keys()
    print(d[key])

# 딕셔너리는 메소드를 지원해주는 등 이점이 있음
for key, value in d.items():
    print(key, value)