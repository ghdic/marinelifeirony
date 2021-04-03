import sys, os
from PySide2 import QtWebEngineWidgets
from PySide2.QtWidgets import QApplication, QWidget, QLabel, QVBoxLayout, QPushButton, QDesktopWidget
from PySide2.QtCore import Qt, QUrl, QPoint
class Titan(QWidget):
    def __init__(self, width, height):
        super().__init__()
        self.width = width
        self.height = height
        self.initUI()
    def initUI(self):
        self.setWindowFlags(Qt.FramelessWindowHint)
        self.center()
        self.webEngineView = QtWebEngineWidgets.QWebEngineView(self)
        self.webEngineView.load(QUrl().fromLocalFile(os.path.split(os.path.abspath(__file__))[0] + r'\resource\background\background.html'))
        self.webEngineView.move(0, 0)
        self.webEngineView.resize(self.width, self.height)
        self.titanui = TitanUI(self.width, self.height)
        vbox = QVBoxLayout(self)
        vbox.setContentsMargins(0, 0, 0, 0)
        vbox.addWidget(self.titanui)
        self.oldPos = self.pos()
        self.setGeometry(300, 300, self.width, self.height)
        self.show()
    def center(self):
        qr = self.frameGeometry()
        cp = QDesktopWidget().availableGeometry().center()
        qr.moveCenter(cp)
        self.move(qr.topLeft())
    def mousePressEvent(self, event):
        self.oldPos = event.globalPos()
    def mouseMoveEvent(self, event):
        delta = QPoint (event.globalPos() - self.oldPos)
        self.move(self.x() + delta.x(), self.y() + delta.y())
        self.oldPos = event.globalPos()
class TitanUI(QWidget):
    def __init__(self, parent_width, parent_height):
        super().__init__()
        self.parent_width = parent_width
        self.parent_height = parent_height
        self.initUI()
    def initUI(self):
        button = QPushButton('&Button1', self)
        button.setStyleSheet("color: red;"
                              "border-style: solid;"
                              "border-width: 2px;"
                              "border-color: #FA8072;"
                              "border-radius: 3px")
        button.move(self.parent_width//2, self.parent_height//2)
if __name__ == '__main__':
    app = QApplication(sys.argv)
    ex = Titan(1280, 720)
    sys.exit(app.exec_())