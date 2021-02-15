from PyQt5 import QtCore, QtGui, QtWidgets
from PyQt5.QtCore import Qt, QUrl, pyqtSlot
from PyQt5 import QtWebEngineWidgets
from PyQt5 import QtWebEngineCore
from PyQt5.QtWebEngineWidgets import QWebEngineSettings
from PyQt5.QtWidgets import QSizePolicy


class Window(QtWidgets.QWidget):

    def __init__(self):
        super().__init__()
        self.setupUi()
        self.show()
    def setupUi(self):


        self.widget_youtube = QtWidgets.QLabel(self)
        self.widget_youtube.setScaledContents(True)

        self.widget_youtube.setGeometry(QtCore.QRect(2, 100, 1000, 800))
        # self.widget_youtube.setStyleSheet("background-color: rgb(84, 84, 84);")
        self.widget_youtube.setObjectName("widget_youtube")

        self.webview = QtWebEngineWidgets.QWebEngineView(self.widget_youtube)
        self.webview.setUrl(QUrl("https://www.youtube.com/embed/t67_zAg5vvI?autoplay=1"))
        self.webview.setSizePolicy(QSizePolicy.Expanding, QSizePolicy.Expanding)
        self.webview.setGeometry(QtCore.QRect(2, 100, 1000, 800))
        #self.retranslateUi()
        QtCore.QMetaObject.connectSlotsByName(self)


if __name__ == "__main__":
    import sys

    app = QtWidgets.QApplication(sys.argv)
    window = Window()
    sys.exit(app.exec_())