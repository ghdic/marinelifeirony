from ui_form import VideoForm, SettingVideoForm
from PyQt5.QtWidgets import QWidget, QApplication, QDialog
from PyQt5.QtCore import pyqtSlot, QTimer
import sys
import os

import cv2
from PyQt5.QtGui import QImage, QPixmap
import pyaudio
from io import BytesIO
import numpy as np
import socket

class SettingVideoOption(QWidget, SettingVideoForm):
    def __init__(self, server):
        super().__init__()
        self.server = server
        self.server.controller.send(":video".encode("utf-8"))
        self.server.video_controller, _ = self.server.create_controller(self.server.host_ip, self.server.video_port, socket.SOCK_STREAM, 1)
        self.controller = self.server.video_controller
        self.audio_list = self.getAudioList(self.controller)
        self.InitUI(self)
        self.appendAudioList(self.audio_list)
        self.startBtn.clicked.connect(self.startVideoStream)
        self.show()

    def appendAudioList(self, audio_list):
        self.audio_device_combobox.addItems(audio_list)

    def getAudioList(self, controller):
        controller.send(":audio_info".encode('utf-8'))
        np_bytes = controller.recv()
        load_bytes = BytesIO(np_bytes)
        loaded_np = np.load(load_bytes, allow_pickle=True)
        return loaded_np.tolist()

    def startVideoStream(self):
        print(self.videoBtnGroup.checkedId(), self.audio_device_combobox.currentIndex())
        self.window = VideoStream(self.server, self.videoBtnGroup.checkedId(), self.audio_device_combobox.currentIndex())
        self.close()


class VideoStream(QDialog, VideoForm):
    def __init__(self, server, video_device, audio_device):
        super().__init__()
        self.server = server
        self.controller = self.server.video_controller
        self.video_stream_controller = None
        self.video_device = video_device
        self.audio_device = audio_device

        self.InitUI(self, f'[{self.server.client_ip}] 와 연결 됨')

        self.start_btn.clicked.connect(self.startWebcam)

        # 비디오 & 오디오
        self.cap = None
        self.timer = QTimer(self, interval=5)
        self.timer.timeout.connect(self.updateFrame)
        self.rate = 44100
        self.frames_per_buffer = 1024
        self.channels = 2
        self.format = pyaudio.paInt16
        self.audio_filename = "temp_audio.wav"
        self.audio = pyaudio.PyAudio()
        self.output_audio = self.audio.open(format=self.format,
                                      channels=self.channels,
                                      rate=self.rate,
                                      output=True)
        self.audio_frames = []
        self.show()



    @pyqtSlot()
    def startWebcam(self):
        if self.video_stream_controller is None:
            self.controller.send(':start'.encode('utf-8'))
            self.video_stream_controller, _ = self.server.create_controller(self.server.host_ip, self.server.video_stream_port, socket.SOCK_STREAM, 1)

        self.timer.start()

    @pyqtSlot()
    def updateFrame(self):
        np_bytes = self.video_stream_controller.recv()
        load_bytes = BytesIO(np_bytes)
        self.image = np.load(load_bytes, allow_pickle=True)
        self.displayImage(self.image, True)

        data = self.video_stream_controller.recv()
        self.audio_frames.append(data)
        self.output_audio.write(data)


    @pyqtSlot()
    def captureImage(self):
        frame = self.image
        path = ''
        if frame:
            QApplication.beep()
            name = "my_image.jpg"
            cv2.imwrite(os.path.join(path, name), frame)

    def displayImage(self, img, window=True):
        qformat = QImage.Format_Indexed8
        if len(img.shape) == 3:
            if img.shape[2] == 4:
                qformat = QImage.Format_RGBA8888
            else:
                qformat = QImage.Format_RGB888
        outImage = QImage(img, img.shape[1], img.shape[0], img.strides[0], qformat)
        outImage = outImage.rgbSwapped()
        if window:
            self.video_label.setPixmap(QPixmap.fromImage(outImage))



    def closeEvent(self, event):
        """ 창 닫는 이벤트 오버라이딩 """
        #self.controller.sock.close()
        print("안녕")


# App = QApplication(sys.argv)
# setting = SettingVideoOption("controller", "123123", ["Input Device id  0  -  Microsoft 사운드 매퍼 - Input", "Input Device id  1  -  스테레오 믹스(Realtek High Definition"])
# sys.exit(App.exec())
