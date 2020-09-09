import numpy as np
import sys

# a = np.array([1, 2, 3], dtype="int8") # array(배열, dtype=데이터타입)
# b = np.array([[4.0, 5.0, 6.0, 7.0], [8.0, 0.0, 10.0, 21.0]]) # 암묵적 데이터타입 명시
# print(a)
# print(b)

# print(a.ndim, b.ndim) # 차원
# print(a.shape, b.shape) # 모양

# # Get type
# print(a.dtype, b.dtype)

# # Get size return type bytes
# print(a.itemsize, b.itemsize)

# # Get totla size
# print(a.size, b.size)

# a = np.array([[1,2,3,4,5,6,7], [8,9,10,11,12,13,14]])
# print(a[1, 3]) # index 접근
# print(a[0, :]) # get row
# print(a[:, 2]) # get col

# # Getting a little more fancy [startindex:endindex:stepsize]
# print(a[0, 1:-1:2])

# a[1, 5] = 20
# print(a)

# a[:, 2] = [1, 2]
# print(a)

# a = np.array([[[1,2], [3,4]], [[5,6],[7,8]]])
# print(a)
# print(a[:, 1, :])
# a[:,1,:] = [[10,11], [12,13]]
# print(a)

a = np.zeros((2, 3, 2))
print(a)

print(np.ones((4, 2, 2), dtype="int32"))


print(np.full((2, 2), 99))

print(np.full_like(a, 4))

# Random decimal numbers
26:41