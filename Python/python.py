
# a, b, c = map(int, input().split())  # 여러개를 같은 타입으로 입력받을때

# print sep, end
# print(2019, 02, 13, sep='/')
#
# print(1, end='')
# print(2, end='')
# print(3)

# print(10_000_000) # 콤마 대신 _으로 구분 콤마사용시 튜플 자료형으로 인식댐

# import sys
# print(sys.getrefcount(1000))    # 2: Windows에서 처음 레퍼런스 카운트는 2
#                                 # 3: 리눅스에서 처음 레퍼런스 카운트는 3

import subprocess
subprocess.check_call(["attrib","+H","myfile"])  # 윈도우 파일&폴더 숨김속성 킴