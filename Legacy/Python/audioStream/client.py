import socket
from SocketSendRecv import SendRecv
import pyaudio
import time
from PyQt5.QtCore import QTimer, pyqtSlot, QCoreApplication, QObject, QEventLoop
import sys

# # stream_callback 이용
#
# class Client:
#     def __init__(self, host, port):
#         self.host = host
#         self.port = port
#         self.rate = 44100
#         self.frames_per_buffer = 1024
#         self.channels = 2
#         self.format = pyaudio.paInt16
#         self.audio_filename = "temp_audio.wav"
#         self.audio = pyaudio.PyAudio()
#         self.audio_stream = self.audio.open(format=self.format,
#                                             channels=self.channels,
#                                             rate=self.rate,
#                                             input=True,
#                                             frames_per_buffer=self.frames_per_buffer,
#                                             input_device_index=0,
#                                             stream_callback=self.updateAudioFrame
#                                             )
#         self.controller = self.createController(self.host, self.port)
#         self.audio_stream.start_stream()
#         print("시작")
#         time.sleep(10)
#         print("끝")
#         self.audio_stream.stop_stream()
#         self.controller.sock.close()
#
#     def createSocket(self):
#         try:
#             sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
#             sock.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
#             sock.settimeout(3600)
#         except socket.error as e:
#             print(e)
#             time.sleep(10)
#             sock = self.createSocket()
#         return sock
#
#     def connectSocket(self, sock, ip, port):
#         try:
#             sock.connect((ip, port))
#             print(f"[{ip}:{port}]와 정상 연결되었습니다")
#         except socket.error as e:
#             print(e)
#             time.sleep(10)
#             return self.connectSocket(sock, ip, port)
#         return SendRecv(sock)
#
#     def createController(self, ip, port):
#         sock = self.createSocket()
#         return self.connectSocket(sock, ip, port)
#
#
#     def updateAudioFrame(self, in_data, frame_count, time_info, status):
#         self.controller.send(in_data)
#         print("보내줌")
#         return in_data, pyaudio.paContinue
# c = Client("192.168.0.2", 8888)


# # 방법2 QTimer로 interval마다
# class Client(QObject):
#     def __init__(self, host, port):
#         super().__init__()
#         self.host = host
#         self.port = port
#         self.rate = 44100
#         self.frames_per_buffer = 1024
#         self.channels = 2
#         self.format = pyaudio.paInt16
#         self.audio_filename = "temp_audio.wav"
#         self.audio = pyaudio.PyAudio()
#         self.audio_stream = self.audio.open(format=self.format,
#                                             channels=self.channels,
#                                             rate=self.rate,
#                                             input=True,
#                                             frames_per_buffer=self.frames_per_buffer,
#                                             input_device_index=0
#                                             )
#         self.timer = QTimer(interval=5)
#         self.timer.timeout.connect(self.updateAudioFrame)
#         self.controller = self.createController(self.host, self.port)
#         self.audio_stream.start_stream()
#         self.timer.start()
#         print("시작")
#         loop = QEventLoop()
#         QTimer.singleShot(10000, loop.quit)
#         loop.exec()
#         print("끝")
#         self.timer.stop()
#         self.audio_stream.stop_stream()
#         self.controller.sock.close()
#
#     def createSocket(self):
#         try:
#             sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
#             sock.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
#             sock.settimeout(3600)
#         except socket.error as e:
#             print(e)
#             time.sleep(10)
#             sock = self.createSocket()
#         return sock
#
#     def connectSocket(self, sock, ip, port):
#         try:
#             sock.connect((ip, port))
#             print(f"[{ip}:{port}]와 정상 연결되었습니다")
#         except socket.error as e:
#             print(e)
#             time.sleep(10)
#             return self.connectSocket(sock, ip, port)
#         return SendRecv(sock)
#
#     def createController(self, ip, port):
#         sock = self.createSocket()
#         return self.connectSocket(sock, ip, port)
#
#
#     def updateAudioFrame(self):
#         in_data = self.audio_stream.read(self.audio_stream.get_read_available())
#         self.controller.send(in_data)
#         print("보내줌")
#
# app = QCoreApplication(sys.argv)
# c = Client("192.168.0.2", 8888)
# sys.exit(app.exec())