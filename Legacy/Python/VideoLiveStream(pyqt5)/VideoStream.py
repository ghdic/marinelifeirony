from ui_form import VideoForm, SettingVideoForm
from PyQt5.QtWidgets import QWidget, QApplication, QDialog
from PyQt5.QtCore import pyqtSlot, QTimer
import sys

import cv2
from PyQt5.QtGui import QImage, QPixmap
import pyaudio
from io import BytesIO
import numpy as np

class SettingVideoOption(QWidget, SettingVideoForm):
    def __init__(self, server, controller, ip):
        super().__init__()
        self.server = server
        self.controller = controller
        self.ip = ip
        self.audio_list = self.getAudioList(self.controller)
        self.InitUI(self)
        self.appendAudioList(self.audio_list)
        self.startBtn.clicked.connect(self.startVideoStream)
        self.show()

    def appendAudioList(self, audio_list):
        self.audio_device_combobox.addItems(audio_list)

    def getAudioList(self, controller):
        controller.send(":audio_info")
        np_bytes = controller.recv()
        load_bytes = BytesIO(np_bytes)
        loaded_np = np.load(load_bytes, allow_pickle=True)
        return loaded_np.tolist()

    def startVideoStream(self):
        print(self.videoBtnGroup.checkedId(), self.audio_device_combobox.currentIndex())
        self.window = VideoStream(self.server, self.controller, self.ip, self.videoBtnGroup.checkedId(), self.audio_device_combobox.currentIndex())
        self.close()


class VideoStream(QDialog, VideoForm):
    def __init__(self, server, controller, ip, video_device, audio_device):
        super().__init__()
        self.servver = server
        self.controller = controller
        self.ip = ip
        self.video_device = video_device
        self.audio_device = audio_device
        self.InitUI(self, f'[{self.ip}] 와 연결 됨')

        self.start_btn.clicked.connect(self.startWebcam)

        self.cap = None
        self.timer = QTimer(self, interval=5)
        self.timer.timeout.connect(self.updateFrame)

        self.timer2 = QTimer(self, interval=5)
        self.timer2.timeout.connect(self.updateSound)
        self.rate = 44100
        self.frames_per_buffer = 1024
        self.channels = 2
        self.format = pyaudio.paInt16
        self.audio_filename = "temp_audio.wav"
        self.audio = pyaudio.PyAudio()
        self.stream = self.audio.open(format=self.format,
                                      channels=self.channels,
                                      rate=self.rate,
                                      input=True,
                                      frames_per_buffer=self.frames_per_buffer,
                                      input_device_index=0
                                      )
        self.output = self.audio.open(format=self.format,
                                      channels=self.channels,
                                      rate=self.rate,
                                      output=True)
        self.audio_frames = []

        self.show()

    @pyqtSlot()
    def updateSound(self):
        print(self.stream.get_read_available())
        data = self.stream.read(self.stream.get_read_available()) # x4
        self.output.write(data)

    @pyqtSlot()
    def startWebcam(self):
        if self.cap is None:
            self.cap = cv2.VideoCapture(0)
            self.cap.set(cv2.CAP_PROP_FRAME_HEIGHT, 480)
            self.cap.set(cv2.CAP_PROP_FRAME_WIDTH, 640)
            self.stream.start_stream()
        self.timer.start()
        self.timer2.start()

    @pyqtSlot()
    def updateFrame(self):
        ret, image = self.cap.read()
        simage = cv2.flip(image, 1)
        self.displayImage(image, True)


    @pyqtSlot()
    def captureImage(self):
        flag, frame = self.cap.read()
        path = r''  #
        if flag:
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
