# import threading
# from PyQt5.QtCore import QTimer, QCoreApplication
# import time

# def set_interval(func, sec):
#     global cnt
#     def func_wrapper():
#         set_interval(func, sec)
#         func()
#     t = threading.Timer(sec, func_wrapper)
#     if cnt == 200:
#         return
#     t.start()


# def printk():
#     global cnt
#     cnt += 1
#     if cnt == 200:
#         e = time.perf_counter()
#         print(e - s)

# # 밥법 1. threading.Timer
# s = time.perf_counter()
# cnt = 0
# set_interval(printk, 0.005)
# print("밥법 1. threading.Timer")
# time.sleep(10)

# # 방법 2. time.sleep
# def printa():
#     global cnt
    
#     while cnt < 200:
#         t0 = time.time()
#         t1 = 0
#         while t1-t0 < 0.005:
#             t1 = time.time()
#         cnt += 1
#     e = time.perf_counter()
#     print(e-s)
# t = threading.Thread(target=printa)
# cnt = 0
# s = time.perf_counter()
# t.start()
# print("방법 2. time.sleep")
# time.sleep(10)

# # 방법 3. QTimer

# app = QCoreApplication([])
# q = QTimer(interval=5)
# q.timeout.connect(printk)
# cnt = 0
# s = time.perf_counter()
# q.start()
# print("방법 3. QTimer")
# app.exec_()

import pyautogui as pg
import keyboard

while True:
    if keyboard.is_pressed('esc'):
        break
    print("hi")

