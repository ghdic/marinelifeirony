# https://numpy.org/doc/stable/reference/

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

# a = np.zeros((2, 3, 2))
# print(a)
#
# print(np.ones((4, 2, 2), dtype="int32"))
#
#
# print(np.full((2, 2), 99))
#
# print(np.full_like(a, 4))

# # Random decimal numbers
# print(np.random.rand(4, 2))
#
# # Random Integer valeus -7~7
# print(np.random.randint(-7, 7, size=(3, 3)))
#
# # identity matrix 대각 행렬
# print(np.identity(5))

# arr = np.array([[1, 2, 3]])
# r1 = np.repeat(arr, 3, axis=0)
# print(r1)

# output = np.ones((5, 5))
# #
# # z = np.zeros((3, 3))
# # z[1, 1] = 9
# #
# # output[1:4, 1:4] = z
# # print(output)
# #
# # # 얕은 복사
# # a = np.array([1, 2, 3])
# # b = a
# # b[0] = 100
# # print(a)

# # numpy 연산
# a = np.array([1, 2, 3, 4])
# print(a)
# print(a + 2)
# print(a - 2)
# print(a * 2)
# print(a / 2)
# print(a // 2)
# print(a ** 2)
#
# print(np.cos(a))
#
# a = np.ones((2, 3))
# b = np.full((3, 2), 2) # shape, value
# print(b)
#
# print(np.matmul(a, b)) # 행렬곱
#
# c = np.identity(3)
# print(np.linalg.det(c)) # det(A) 구함

# stats = np.array([[1, 2, 3], [4, 5, 6]])
# print(np.min(stats, axis=0)) # axis는 축을 의미한다 즉 1차원 [1, 2, 3], 2차원 [1, 4]를 가져옴
# print(np.min(stats, axis=1))
# print(np.max(stats, axis=0))
# print(np.max(stats, axis=1))
#
# print(np.sum(stats, axis=0)) # 해당 차원으로 다 더함

# before = np.array([[1, 2, 3, 4], [5, 6, 7, 8]])
# after = before.reshape((8, 1)) # 개수는 맞춰줘야함
# print(after)
# after = before.reshape((4, 2))
# print(after)
# after = before.reshape((2, 2, 2))
# print(after)

# # vertically stacking vectors
# v1 = np.array([1, 2, 3, 4])
# v2 = np.array([5, 6, 7, 8])
#
# print(np.vstack([v1, v2, v1, v2]))
#
# h1 = np.ones((2, 4))
# h2 = np.zeros((2, 2))
#
# print(np.hstack((h1, h2)))

# data = np.genfromtxt('data.txt', delimiter=',')
# print(data.astype('int32'))
#
# # Boolean masking and advanced indexing
# print(data > 25)
# print(data[data > 25]) # 조건 만족하는 값만

# a = np.arange(5)
# b = np.array([
#     a,
#     a+5,
#     a+10,
#     a+15,
#     a+20,
#     a+25
# ])
# b = np.array([[0, 5, 10, 15, 20, 25]])
# b = a + b.T # or b.T
# print(np.arange(30).reshape((6, 5)))
#
# # 특정 element 골라 골라
# print(b[2:4, 0:2])
# print(b[[0, 1, 2, 3], [1, 2, 3, 4]])
# print(b[[0, 4, 5], 3:])