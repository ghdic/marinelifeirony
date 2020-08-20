import socket
import pyaudio
from SocketSendRecv import SendRecv
import threading
from PyQt5.QtCore import QTimer, QCoreApplication, pyqtSlot
import sys
import time
import cv2
from io import BytesIO
import numpy as np

class Client:
    def __init__(self, host, port):
        self.host = host
        self.port = port
        self.video_port = 10004
        self.video_state = False
        self.App = QCoreApplication([])
        self.timer = QTimer(interval=5)
        self.timer.timeout.connect(self.updateFrame())
        self.cap = None

        sys.exit(self.App.exec_())
        self.sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        self.sock.settimeout(3600)
        self.video_sock = None
        self.video_controller = None
        self.connect()
        self.controller = SendRecv(self.sock)

        self.shell()

    def connect(self):
        try:
            self.sock.connect((self.host, self.port))
            print(f"[{self.host}:{self.port}]와 정상 연결되었습니다")
        except:
            time.sleep(10)
            self.connect()

    def shell(self):
        while True:
            command = self.controller.recv()
            if command.strip():
                if ":start" in command:
                    self.startVideo()
                elif ":stop" in command:
                    self.video_state = False
                elif command == ":kill":
                    pass
                elif ":audio_info":
                    self.getAudioInfo()

    def startVideo(self):
        if self.video_sock is None:
            self.video_sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM) # connected udp
            self.video_sock.settimeout(3600)
            self.video_sock.connect((self.host, self.video_port))
            self.video_controller = SendRecv(self.video_sock)
            print("비디오 소켓 연결 완료")

        self.video_state = True
        if self.cap is None:
            self.cap = cv2.VideoCapture(0)
            self.cap.set(cv2.CAP_PROP_FRAME_HEIGHT, 480)
            self.cap.set(cv2.CAP_PROP_FRAME_WIDTH, 640)
        self.timer.start()

    def stopVideo(self):
        if self.video_sock:
            self.video_sock.close()
            self.video_sock = None
            self.video_controller = None

        self.cap = None

        self.video_state = False
        self.timer.stop()
        self.controller.send(":Done")

    @pyqtSlot()
    def updateFrame(self):
        ret, image = self.cap.read()
        np_bytes = BytesIO()
        np.save(np_bytes, image, allow_pickle=True)
        np_bytes = np_bytes.getvalue()
        self.video_controller.send(np_bytes)

        # load_bytes = BytesIO(np_bytes)
        # loaded_np = np.load(load_bytes, allow_pickle=True)




    def getAudioInfo(self):
        p = pyaudio.PyAudio()
        info = p.get_host_api_info_by_index(0)
        numdevices = info.get('deviceCount')
        info = []
        for i in range(0, numdevices):
            if (p.get_device_info_by_host_api_device_index(0, i).get('maxInputChannels')) > 0:
                info.append(p.get_device_info_by_host_api_device_index(0, i).get('name'))

        info = np.array(info)
        np_bytes = BytesIO()
        np.save(np_bytes, info, allow_pickle=True)
        np_bytes = np_bytes.getvalue()
        self.controller.send(np_bytes)

c = Client("localhost", 8888)

# l = ["adfdf", "Dfsadf", "fdffd"]
# l = np.array(l)
# print(l)
# np_bytes = BytesIO()
# np.save(np_bytes, l, allow_pickle=True)
# np_bytes = np_bytes.getvalue()
# load_bytes = BytesIO(np_bytes)
# loaded_np = np.load(load_bytes, allow_pickle=True)

# import threading
# from PyQt5.QtCore import QTimer, QCoreApplication
# import time
#
# def set_interval(func, sec):
#     global cnt
#     def func_wrapper():
#         set_interval(func, sec)
#         func()
#     t = threading.Timer(sec, func_wrapper)
#     if cnt == 200:
#         return
#     t.start()
#
#
# def printk():
#     global cnt
#     cnt += 1
#     if cnt == 200:
#         e = time.perf_counter()
#         print(e - s)
#
# # 밥법 1. threading.Timer
# s = time.perf_counter()
# cnt = 0
# set_interval(printk, 0.005)
# print("밥법 1. threading.Timer")
# time.sleep(10)
#
# # 방법 2. time.sleep
# def printa():
#     global cnt
#     while cnt < 200:
#         cnt += 1
#         time.sleep(0.005)
#     e = time.perf_counter()
#     print(e-s)
# t = threading.Thread(target=printa)
# cnt = 0
# s = time.perf_counter()
# t.start()
# print("방법 2. time.sleep")
# time.sleep(10)
#
# # 방법 3. QTimer
#
# app = QCoreApplication([])
# q = QTimer(interval=5)
# q.timeout.connect(printk)
# cnt = 0
# s = time.perf_counter()
# q.start()
# print("방법 3. QTimer")
# app.exec_()
