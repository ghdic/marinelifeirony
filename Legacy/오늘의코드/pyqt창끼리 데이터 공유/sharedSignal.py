import sys
from PyQt5 import QtCore, QtGui, QtWidgets

class Window(QtWidgets.QWidget):
    def __init__(self):
        super().__init__()
        self.label = QtWidgets.QLabel("text", self)
        self.label.setAlignment(QtCore.Qt.AlignCenter)
        self.label.resize(300, 100)
        self.display()
        self.show()
    
    def display(self):
        self.w = NewWindw()
        self.w.command.connect(self.anyfunction)
    
    def closeEvent(self, event):
        self.w.close()

    @QtCore.pyqtSlot(str)
    def anyfunction(self, msg):
        self.label.setText(msg)

class NewWindw(QtWidgets.QWidget):
    command = QtCore.pyqtSignal(str)
    def __init__(self):
        super().__init__()
        self.inputbox = QtWidgets.QLineEdit(self)
        self.inputbox.resize(500, 100)
        self.inputbox.returnPressed.connect(self.sendCommand)
        self.show()

    @QtCore.pyqtSlot()
    def sendCommand(self):
        msg = self.inputbox.text()
        self.command.emit(msg)
        self.inputbox.setText("")


app = QtWidgets.QApplication(sys.argv)
window = Window()
sys.exit(app.exec())
