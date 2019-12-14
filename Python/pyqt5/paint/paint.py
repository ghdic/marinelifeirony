from PyQt5.QtWidgets import QApplication, QMainWindow, QMenuBar, QMenu, QAction
from PyQt5.QtGui import QIcon, QImage
from PyQt5.QtCore import Qt, QPoint
import sys


class Window(QMainWindow):
    def __init__(self):
        super().__init__()

        top = 400
        left = 400
        width = 800
        height = 600

        icon = "images/icon.ico";

        self.setWindowTitle("Paint Clone")
        self.setGeometry(top, left, width, height)
        self.setWindowIcon(QIcon(icon))

        self.image = QImage(self.size(), QImage.Format_RGB32)
        self.image.fill(Qt.white)

        self.drawing = False
        self.brushSize = 2
        self.brushColor = Qt.black

        self.lastPoint = QPoint()

        mainMenu = self.menuBar()
        fileMenu = mainMenu.addMenu("File")
        brushMenu = mainMenu.addMenu("Brush Size")
        brushColor = mainMenu.addMenu("Brush Color")

        saveAction = QAction(QIcon("images/save.png"), "Save", self)
        saveAction.setShortcut("Ctrl+S")
        fileMenu.addAction(saveAction)

        clearAction = QAction(QIcon("images/clear.png"), "Clear", self)
        clearAction.setShortcut("Ctrl+C")
        fileMenu.addAction(clearAction)

        threepxAction = QAction(QIcon("images/threepx.png"), "3px", self)
        threepxAction.setShortcut("Ctrl+T")
        brushMenu.addAction(threepxAction)

        fivepxAction = QAction(QIcon("images/fivepx.png"), "5px", self)
        fivepxAction.setShortcut("Ctrl+F")
        brushMenu.addAction(fivepxAction)

        sevenpxAction = QAction(QIcon("images/sevenpx.png"), "7px", self)
        sevenpxAction.setShortcut("Ctrl+G")
        brushMenu.addAction(sevenpxAction)

        ninepxAction = QAction(QIcon("images/ninepx.png"), "9px", self)
        ninepxAction.setShortcut("Ctrl+H")
        brushMenu.addAction(ninepxAction)

        blackAction = QAction(QIcon("images/black.png"), "Black", self)
        blackAction.setShortcut("Ctrl+B")
        brushColor.addAction(blackAction)

        whiteAction = QAction(QIcon("images/white.png"), "White", self)
        whiteAction.setShortcut("Ctrl+W")
        brushColor.addAction(whiteAction)

        redAction = QAction(QIcon("images/red.png"), "Red", self)
        redAction.setShortcut("Ctrl+R")
        brushColor.addAction(redAction)


if __name__ == "__main__":
    app = QApplication(sys.argv)
    window = Window()
    window.show()
    app.exec()