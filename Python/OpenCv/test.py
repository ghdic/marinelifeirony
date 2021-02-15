# 설치 pip install opencv-python

# import cv2
# import numpy as np
# print(cv2.__version__)
# image = cv2.imread("images/cute.png", cv2.IMREAD_UNCHANGED)
# # cv2.IMREAD_COLOR(1) : 이미지 파일을 Color로 읽음. 투명한 부분은 무시하며 Default 설정입니다
# # cv2.IMREAD_GRAYSCALE(0) : 이미지 파일을 Grayscale로 읽음. 실제 이미지 처리시 중간 단계로 많이 사용합니다
# # cv2.IMREAD_UNCHAGED(-1) : 이미지 파일을 alpha channel 까지 포함해 읽음
# cv2.imshow("Moon", image)
# cv2.waitKey(0) # 키 입력시까지 무한대기
# cv2.destroyAllWindows() # 모든 윈도우 닫음


import cv2
from PIL import ImageGrab
import numpy as np
from win32api import GetSystemMetrics
import pyautogui

img = ImageGrab.grab((0, 0, GetSystemMetrics(0), GetSystemMetrics(1)))
pos = None
while pos is None:
    try:
        pos = pyautogui.locateCenterOnScreen("images\\cute.png", grayscale=True, confidence=0.3)
    except:
        print("z")
print(pos)
pyautogui.moveTo(pos)
# img_np = np.array(img)
# frame = cv2.cvtColor(img_np, cv2.COLOR_BGR2HSV)
# frame_hsv = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)
# #imgUMat = cv2.UMat(src)
#
# cv2.imshow("dst", frame)
# cv2.imshow("frame", frame_hsv)
# cv2.waitKey(0)
# cv2.destroyAllWindows()