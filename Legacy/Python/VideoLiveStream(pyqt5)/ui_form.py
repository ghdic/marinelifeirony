from PyQt5.QtWidgets import QLabel, QVBoxLayout, QHBoxLayout, QRadioButton, QGroupBox,QPushButton, QButtonGroup, QComboBox
from PyQt5.QtGui import QIcon


class SettingVideoForm:
    def InitUI(self, form):
        form.setWindowTitle("비디오 설정")
        form.setGeometry(200, 200, 380, 300)
        form.setWindowIcon(QIcon(""))


        # 비디오 설정
        self.videoGroup = QGroupBox("비디오 선택", form)
        self.videoBtnGroup = QButtonGroup(form)

        self.videoLayout = QHBoxLayout(form)
        self.screenRBtn = QRadioButton("컴퓨터 스크린", form)
        self.screenRBtn.click()
        self.camRBtn = QRadioButton("라이브 캠", form)

        self.videoBtnGroup.addButton(self.screenRBtn, 0)
        self.videoBtnGroup.addButton(self.camRBtn, 1)

        self.videoLayout.addWidget(self.screenRBtn)
        self.videoLayout.addWidget(self.camRBtn)
        self.videoGroup.setLayout(self.videoLayout)

        # 오디오 설정
        self.audioGroup = QGroupBox("오디오 디바이스 선택", form)
        self.audioLayout = QVBoxLayout(form)
        self.audio_device_combobox = QComboBox(form)

        self.audioLayout.addWidget(self.audio_device_combobox)
        self.audioGroup.setLayout(self.audioLayout)

        # 시작 버튼
        self.startBtn = QPushButton("Start", form)

        # 레이아웃 설정
        self.vbox = QVBoxLayout(form)
        self.vbox.addWidget(self.videoGroup)
        self.vbox.addWidget(self.audioGroup)
        self.vbox.addWidget(self.startBtn)

class VideoForm:
    def InitUI(self, form, title):
        form.setWindowTitle(title)
        form.setGeometry(200, 200, 800, 600)
        form.setWindowIcon(QIcon(""))

        self.video_label = QLabel("", form)




        self.vbox = QVBoxLayout(form)
        self.vbox.addWidget(self.video_label)


