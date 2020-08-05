import struct

s = struct.pack('hhi', 5, 10, 15) # 바이트로 구조체 묶음
print(s)
s = struct.pack('iii', 5, 10, 15)
print(s)

print(struct.unpack('iii', s)) # 튜플로 반환

print("struct size : {}".format(struct.calcsize('hiq'))) # 포맷 사이즈 반환

import ctypes

sz = struct.calcsize('hhl')
buf = ctypes.create_string_buffer(sz * 2) # sz크기의 빈 버퍼 생성

struct.pack_into('hhl', buf, 0, 5, 10, 15) # format, buffer, offset(시작점), v1, v2....
struct.pack_into('hhl', buf, sz, 1, 2, 3)
print(struct.unpack_from('hhlhhl', buf, 0)) # format, buffer, offset