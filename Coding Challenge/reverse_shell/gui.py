from PyQt5.QtGui import QIcon
from PyQt5.QtWidgets import (QDialog, QMainWindow, QApplication, QVBoxLayout, QHBoxLayout, 
                            QListWidget, QLabel, QPushButton, QPlainTextEdit, QLineEdit,QGroupBox, QGridLayout, QWidget)
from PyQt5.QtCore import Qt
import sys
from server import Server

class Window(QDialog):
    def __init__(self):
        super().__init__()

        self.title = "server"
        self.left = 200
        self.top = 200
        self.width = 1200
        self.height = 600
        self.iconName = "ico.ico"
        self.InitUI()

    def InitUI(self):

        #mainMenu = self.menubar()

        self.setWindowTitle(self.title)
        # self.setWindowIcon(QIcon(self.iconName))
        self.setGeometry(self.left, self.top, self.width, self.height)

        hbox = QHBoxLayout()

        leftvbox = QVBoxLayout()
        self.ip_list_creator(leftvbox)

        rightvbox = QVBoxLayout()
        self.func_group_creator(rightvbox)

        leftvbox.setSpacing(1)
        # 왼쪽 사이즈 고정 시키기 위해서 위젯에 레이아웃을 넣음
        leftwidget = QWidget()
        leftwidget.setLayout(leftvbox)
        leftwidget.setFixedWidth(250)

        hbox.addWidget(leftwidget)
        hbox.addLayout(rightvbox)
        self.setLayout(hbox)
        self.show()

    def ip_list_creator(self, layout):
        """ IP 목록 UI 생성 """
        self.ip_label = QLabel("연결된 IP 목록")
        self.ip_list = QListWidget()
        self.ip_list.clicked.connect(self.listview_clicked)
        layout.addWidget(self.ip_label)
        layout.addWidget(self.ip_list)

    def func_group_creator(self, layout):
        """ 기능 버튼 그룹 생성 """
        self.func_group = QGroupBox("기능")
        self.func_gridLayout = QGridLayout()

        self.fileUploadBtn = QPushButton("파일 업로드")
        self.fileDownloadBtn = QPushButton("파일 다운로드")
        self.screenShotBtn = QPushButton("스크린캡쳐")
        self.runBrowserBtn = QPushButton("브라우저 켜기")
        self.getWifiPwBtn = QPushButton("Wifi 비번 구하기")
        self.sendMsgBtn = QPushButton("메세지 보내기")
        self.sendMsgBtn.clicked.connect(self.send_message)
        
        self.func_gridLayout.addWidget(self.fileUploadBtn, 0, 0)
        self.func_gridLayout.addWidget(self.fileDownloadBtn, 0, 1)
        self.func_gridLayout.addWidget(self.screenShotBtn, 0, 2)
        self.func_gridLayout.addWidget(self.runBrowserBtn, 1, 0)
        self.func_gridLayout.addWidget(self.getWifiPwBtn, 1, 1)
        self.func_gridLayout.addWidget(self.sendMsgBtn, 1, 2)

        self.func_group.setLayout(self.func_gridLayout)

        self.textarea = QPlainTextEdit()
        
        self.commandLine = QLineEdit()
        layout.addWidget(self.func_group)
        layout.addWidget(self.textarea)
        layout.addWidget(self.commandLine)

    def listview_clicked(self, server:Server):
        item = self.list.currentItem()
        server.select_ip(str(item.text())) # select ip address 함수

    def send_message(self):
        print("hi")


        


App = QApplication(sys.argv)
window = Window()
sys.exit(App.exec())