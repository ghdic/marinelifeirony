import socket
import pyaudio
from SocketSendRecv import SendRecv
import threading
from PyQt5.QtCore import QTimer, QCoreApplication, pyqtSlot, QThreadPool, QObject
import sys
import time
import cv2
from io import BytesIO
import numpy as np
from Worker import Worker

class Client(QObject):
    def __init__(self, host, port):
        super().__init__()
        self.host = host
        self.port = port
        self.video_port = port + 1
        self.video_stream_port = port + 2
        self.video_state = False
        self.App = QCoreApplication([])
        self.timer = QTimer(interval=5)
        self.timer.timeout.connect(self.updateFrame)
        self.threadpool = QThreadPool()
        self.cap = None
        self.rate = 44100
        self.frames_per_buffer = 1024
        self.channels = 2
        self.format = pyaudio.paInt16
        self.audio_filename = "temp_audio.wav"
        self.audio = pyaudio.PyAudio()
        self.audio_stream = self.audio.open(format=self.format,
                                      channels=self.channels,
                                      rate=self.rate,
                                      input=True,
                                      frames_per_buffer=self.frames_per_buffer,
                                      input_device_index=0,
                                      stream_callback=self.updateAudioFrame
                                      )


        self.controller = self.createController(self.host, self.port, socket.SOCK_STREAM)
        self.video_controller = None
        self.video_stream_controller = None
        self.workingThread(self.shell)
        sys.exit(self.App.exec_())

    def createSocket(self, kind):
        try:
            sock = socket.socket(socket.AF_INET, kind)
            sock.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
            sock.settimeout(3600)
        except socket.error as e:
            print(e)
            time.sleep(10)
            sock = self.createSocket(kind)
        return sock

    def connectSocket(self, sock, ip, port):
        try:
            sock.connect((ip, port))
            print(f"[{ip}:{port}]와 정상 연결되었습니다")
        except socket.error as e:
            print(e)
            time.sleep(10)
            return self.connectSocket(sock, ip, port)
        return SendRecv(sock)

    def createController(self, ip, port, kind):
        sock = self.createSocket(kind)
        return self.connectSocket(sock, ip, port)



    def shell(self, progress_callback):
        while True:
            command = self.controller.recv().strip().decode('utf-8')
            if command:
                if command == ":video":
                    if self.video_controller is None:
                        self.video_controller = self.createController(self.host, self.video_port, socket.SOCK_STREAM)
                        self.workingThread(self.videoShell, self.progress_fn)

    def workingThread(self, func, progress=None, result=None, finish=None):
        worker = Worker(func)
        if progress:
            worker.signals.progress.connect(progress)
        # worker.signals.result.connect(result)
        # worker.signals.finished.connect(finish)
        self.threadpool.start(worker)

    def progress_fn(self, msg):
        if msg == ':start':
            self.timer.start()

    # ==================== 비디오 스트리밍 처리 ====================
    def videoShell(self, progress_callback):
        while True:
            command = self.video_controller.recv().strip().decode('utf-8')
            if command:
                if ":start" in command:
                    self.startVideo()
                    progress_callback.emit(':start')
                elif ":stop" in command:
                    self.stopVideo()
                elif command == ":kill":
                    self.video_controller.sock.close()
                    self.video_controller = None
                    self.stopVideo()
                    break
                elif ":audio_info":
                    self.getAudioInfo()


    def startVideo(self):
        if self.video_stream_controller is None:
            self.video_stream_controller = self.createController(self.host, self.video_stream_port, socket.SOCK_STREAM)

        self.video_state = True
        if self.cap is None:
            self.cap = cv2.VideoCapture(0)
            self.cap.set(cv2.CAP_PROP_FRAME_HEIGHT, 480)
            self.cap.set(cv2.CAP_PROP_FRAME_WIDTH, 640)
        self.audio_stream.start_stream()

    def stopVideo(self):
        if self.video_stream_controller:
            self.video_stream_controller.sock.close()
            self.video_stream_controller = None
        self.cap = None
        self.video_state = False
        self.audio_stream.stop_stream()
        self.timer.stop()

    @pyqtSlot()
    def updateFrame(self):
        ret, image = self.cap.read()
        np_bytes = BytesIO()
        np.save(np_bytes, image, allow_pickle=True)
        np_bytes = np_bytes.getvalue()
        self.video_stream_controller.send(np_bytes)

        data = self.audio_stream.read(self.audio_stream.get_read_available())
        self.video_stream_controller.send(data)

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
        self.video_controller.send(np_bytes)

c = Client("127.0.0.1", 8888)