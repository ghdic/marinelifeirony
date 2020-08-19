from ui_form import VideoForm, SettingVideoForm
from PyQt5.QtWidgets import QWidget, QApplication, QDialog
import sys


class SettingVideoOption(QWidget, SettingVideoForm):
    def __init__(self, controller, ip, audio_list):
        super().__init__()
        self.controller = controller
        self.ip = ip
        self.InitUI(self)
        self.appendAudioList(audio_list)
        self.startBtn.clicked.connect(self.startVideoStream)
        self.show()

    def appendAudioList(self, audio_list):
        self.audio_device_combobox.addItems(audio_list)

    def startVideoStream(self):
        print(self.videoBtnGroup.checkedId(), self.audio_device_combobox.currentIndex())
        self.window = VideoStream(self.controller, self.ip, self.videoBtnGroup.checkedId(), self.audio_device_combobox.currentIndex())
        self.close()


class VideoStream(QDialog, VideoForm):
    def __init__(self, controller, ip, video_device, audio_device):
        super().__init__()
        self.controller = controller
        self.ip = ip
        self.video_device = video_device
        self.audio_device = audio_device
        self.InitUI(self, f'[{self.ip}] 와 연결 됨')
        self.show()

    def


    def closeEvent(self, event):
        """ 창 닫는 이벤트 오버라이딩 """
        #self.controller.sock.close()
        print("안녕")


App = QApplication(sys.argv)
setting = SettingVideoOption("controller", "123123", ["Input Device id  0  -  Microsoft 사운드 매퍼 - Input", "Input Device id  1  -  스테레오 믹스(Realtek High Definition"])
sys.exit(App.exec())