# pyinstaller로 라이브러리 path 오류가 날때
# 환경 변수 추가를 해주거나
# 그래도 안되면 pyinstaller --path C:\Users\ghdic\AppData\Local\Programs\Python\Python35-32\Lib\site-packages\PyQt5\Qt\bin --onefile --noconsole test.py
# 이렇게 직접 path를 설정해준다


# # 1.pyqt5 기본창 실행 + 아이콘 적용
# from PyQt5.QtWidgets import QMainWindow, QApplication
# from PyQt5 import QtGui
# import sys
#
# class Window(QMainWindow):
#     def __init__(self):
#         super().__init__()
#         self.title = "PyQt 5 Window"
#         self.top = 100
#         self.left = 100
#         self.width = 400
#         self.height = 300
#         self.InitWindow()
#
#     def InitWindow(self):
#         self.setWindowIcon(QtGui.QIcon("LeetCode_logo.png"))
#         self.setWindowTitle(self.title)
#         self.setGeometry(self.left, self.top, self.width, self.height)
#
#         self.show()
#
# App = QApplication(sys.argv)
# window = Window()
# sys.exit(App.exec())


# # 2.pyqt5 시간을 얻는 여러 방법
# from PyQt5.QtCore import QDateTime, QDate, QTime, Qt
#
# datetime = QDateTime.currentDateTime()
#
# print(datetime.toString())
# print(datetime.toString(Qt.ISODate))
# print(datetime.toString(Qt.DefaultLocaleLongDate))
#
# date = QDate.currentDate()
# print(date.toString())
# print(date.toString(Qt.ISODate))
# print(date.toString(Qt.DefaultLocaleLongDate))
#
# date = QTime.currentTime()


# # 3.local time to UTC
# from PyQt5.QtCore import QDateTime, Qt
#
# datetime = QDateTime.currentDateTime()
#
# print("Local Date And Time Is " + datetime.toString(Qt.DefaultLocaleLongDate))
# print("Universal Date And Time Is " + datetime.toUTC().toString())
#
# print("The Offset From UTC Is {0} : Seconds ".format(datetime.offsetFromUtc()))


# # 4.해당 월, 년에 따라 몇일 있는지 값 얻기
# from PyQt5.QtCore import QDate
#
# date = QDate.currentDate()
#
# d = QDate(2017, 10, 23)
#
# print("Days In A Month: {0}:  ".format(d.daysInMonth()))
# print("Days In A Year: {0}: ".format(d.daysInYear()))


# # 5.날짜 데이터 조작하기
# from PyQt5.QtCore import QDateTime, Qt
#
# datetime = QDateTime.currentDateTime()
#
# print("Today Date And Time Is: " + datetime.toString((Qt.ISODate)))
# print("Adding 12 Days To The Date: {0}".format(datetime.addDays(12).toString(Qt.ISODate)))
# print("Subtracting 25 Days: {0}".format(datetime.addDays(-25).toString(Qt.ISODate)))
# print("Adding 50 Seconds: {0}".format(datetime.addSecs(50).toString(Qt.ISODate)))
# print("Adding 3 Months: {0}".format(datetime.addMonths(3).toString(Qt.ISODate)))
# print("Adding 12 Years: {0}".format(datetime.addYears(12).toString(Qt.ISODate)))


# # 6.QButton 사용법, 7.클릭했을때 함수실행 8.QMessage를 이용하여 question물어보는거
# import sys
# from PyQt5 import QtGui
# from PyQt5.QtWidgets import QMainWindow, QApplication, QPushButton, QToolTip, QMessageBox
# from PyQt5.QtCore import QCoreApplication
# class Window(QMainWindow):
#     def __init__(self):
#         super().__init__()
#
#         self.title = "PyQt5 Push Button"
#         self.left = 100
#         self.top = 100
#         self.width = 680
#         self.height = 540
#
#         self.setWindowIcon(QtGui.QIcon("LeetCode_logo.ico"))
#         button = QPushButton("Close", self)
#         button.move(200, 200)
#         button.setToolTip("<h3>This is Clock Button</h3>")
#         button.clicked.connect(self.Close)
#
#         button2 = QPushButton("Close QMessage", self)
#         button2.setGeometry(400, 400, 150, 100)
#         button2.clicked.connect(self.Close_QMessage)
#         self.InitUi()
#
#     def InitUi(self):
#         self.setWindowTitle(self.title)
#         self.setGeometry(self.left, self.top, self.width, self.height)
#         self.show()
#
#     def Close(self):
#         QCoreApplication.instance().quit()
#
#     def Close_QMessage(self):
#         reply = QMessageBox.question(self, "닫는지확인하는창","닫을꺼임?", QMessageBox.Yes | QMessageBox.No, QMessageBox.No)
#
#         if reply == QMessageBox.Yes:
#             self.close()
#
# App = QApplication(sys.argv)
# window = Window()
# sys.exit(App.exec())


# # 9.QMessage를 통해 About box 띄우기 및 question응용
# import sys
# from PyQt5 import QtGui
# from PyQt5.QtWidgets import QMainWindow, QApplication, QPushButton, QMessageBox
# from PyQt5.QtCore import QCoreApplication
# class Window(QMainWindow):
#     def __init__(self):
#         super().__init__()
#
#         self.title = "PyQt5 Push Button"
#         self.left = 100
#         self.top = 100
#         self.width = 680
#         self.height = 540
#
#         self.setWindowIcon(QtGui.QIcon("LeetCode_logo.ico"))
#
#         button = QPushButton("AboutBox", self)
#         button.move(200, 200)
#         button.clicked.connect(self.AboutMessage)
#
#         button2 = QPushButton("QuestionMessage", self)
#         button2.move(100, 100)
#         button2.clicked.connect(self.QuestionMessage)
#
#         self.InitUi()
#
#     def InitUi(self):
#         self.setWindowTitle(self.title)
#         self.setGeometry(self.left, self.top, self.width, self.height)
#         self.show()
#
#     def AboutMessage(self):
#         QMessageBox.about(self, "About Message", "This is About MessageBox")
#
#     def QuestionMessage(self):
#         message = QMessageBox.question(self, "Question Message", "Have you Subscribeed My Channel?", QMessageBox.Yes | QMessageBox.No, QMessageBox.No)
#
#         if message == QMessageBox.Yes:
#             print("Yes I Have Subscribed")
#         else:
#             print("No I Have not Subtscribed")
# App = QApplication(sys.argv)
# window = Window()
# sys.exit(App.exec())

# # 10. status bus 출력 맨 왼쪽아래에 출력되는 로그나 정보 같은거
# import sys
# from PyQt5 import QtGui
# from PyQt5.QtWidgets import QMainWindow, QApplication, QStatusBar
#
#
# class Window(QMainWindow):
#     def __init__(self):
#         super().__init__()
#
#         self.title = "QStatus Bar"
#         self.top = 200
#         self.left = 200
#         self.width = 600
#         self.height = 500
#
#         self.setWindowIcon(QtGui.QIcon("LeetCode_logo.ico"))
#
#         self.InitUI()
#
#
#     def InitUI(self):
#
#         self.statusBar().showMessage("This is simple status bar")
#
#         self.setWindowTitle(self.title)
#         self.setGeometry(self.left, self.top, self.width, self.height)
#         self.show()
#
# App = QApplication(sys.argv)
# window = Window()
# sys.exit(App.exec())


# # 11. QMenu Bar 사용 위에 메뉴와 메뉴 선택지(QAction) 사용법
# import sys
# from PyQt5 import QtGui
# from PyQt5.QtWidgets import QMainWindow, QApplication, QAction
#
#
# class Window(QMainWindow):
#     def __init__(self):
#         super().__init__()
#
#         self.title = "QMenuBar"
#         self.top = 200
#         self.left = 200
#         self.width = 600
#         self.height = 500
#
#         self.setWindowIcon(QtGui.QIcon("LeetCode_logo.ico"))
#
#         self.InitUI()
#
#
#     def InitUI(self):
#
#         mainMenu = self.menuBar()
#         fileMenu = mainMenu.addMenu("File")
#         viewMenu = mainMenu.addMenu("View")
#         editMenu = mainMenu.addMenu("Edit")
#         searchMenu = mainMenu.addMenu("Search")
#         toolMenu = mainMenu.addMenu("Tool")
#         helpMenu = mainMenu.addMenu("Help")
#
#         exitButton = QAction(QtGui.QIcon("button_icon.png"), "Exit", self)
#         exitButton.setShortcut("Ctrl+E")
#         exitButton.setStatusTip("Exit Application")
#         exitButton.triggered.connect(self.close)
#         fileMenu.addAction(exitButton)
#
#         self.setWindowTitle(self.title)
#         self.setGeometry(self.left, self.top, self.width, self.height)
#         self.show()
#
# App = QApplication(sys.argv)
# window = Window()
# sys.exit(App.exec())


# # 12. 메뉴 체크하여 statusBar 보여줬다 숨겼다 하기
# import sys
# from PyQt5 import QtGui
# from PyQt5.QtWidgets import QMainWindow, QApplication, QMenu, QMenuBar, QAction, QStatusBar


# class Window(QMainWindow):
#     def __init__(self):
#         super().__init__()

#         self.title = "QMenuBar"
#         self.top = 200
#         self.left = 200
#         self.width = 600
#         self.height = 500

#         self.setWindowIcon(QtGui.QIcon("LeetCode_logo.ico"))

#         self.InitUI()


#     def InitUI(self):

#         self.statusbar = self.statusBar()
#         self.statusbar.showMessage("Message is Ready")

#         menubar = self.menuBar()
#         viewMenu = menubar.addMenu("View")

#         viewAction = QAction("View Status", self, checkable = True)
#         viewAction.setStatusTip("View StatusBar")
#         viewAction.setChecked(True)
#         viewAction.triggered.connect(self.toggleMenu)

#         viewMenu.addAction(viewAction)

#         self.setWindowTitle(self.title)
#         self.setGeometry(self.left, self.top, self.width, self.height)
#         self.show()

#     def toggleMenu(self, state):
#         if state:
#             self.statusbar.show()
#         else:
#             self.statusbar.hide()

# App = QApplication(sys.argv)
# window = Window()
# sys.exit(App.exec())


# # 13. ContextMenu, 창 아무데서나 오른쪽 마우스 클릭할때 뜨는 메뉴 만들기
# import sys
# from PyQt5 import QtGui
# from PyQt5.QtWidgets import QMainWindow, QApplication, QMenu
#
#
# class Window(QMainWindow):
#     def __init__(self):
#         super().__init__()
#
#         self.title = "PyQt5 Context Menu"
#         self.top = 200
#         self.left = 200
#         self.width = 600
#         self.height = 500
#
#         self.setWindowIcon(QtGui.QIcon("LeetCode_logo.ico"))
#
#         self.InitUI()
#
#
#     def InitUI(self):
#         self.setWindowTitle(self.title)
#         self.setGeometry(self.left, self.top, self.width, self.height)
#         self.show()
#
#
#     def contextMenuEvent(self, event): # contextMenuEvent라는걸 재정의 함.. 오른쪽 클릭할때 뜨는 메뉴
#         contextMenu = QMenu(self)
#         newAct = contextMenu.addAction("New")
#         openAct = contextMenu.addAction("Open")
#         quitAct = contextMenu.addAction("Quit")
#
#         action = contextMenu.exec_(self.mapToGlobal(event.pos())) # 창 전체에서 pos(위치)에 대해 이벤트를 받아옴
#
#         if action == quitAct:
#             self.close()
#
# App = QApplication(sys.argv)
# window = Window()
# sys.exit(App.exec())

# #14 Toolbars 이거 툴바 떼어서 움직일 수도 있음.. ㄷㄷ
# import sys
# from PyQt5 import QtGui
# from PyQt5.QtWidgets import QMainWindow, QApplication, QAction
#
#
# class Window(QMainWindow):
#     def __init__(self):
#         super().__init__()
#
#         self.title = "PyQt5 Toolbars"
#         self.top = 200
#         self.left = 200
#         self.width = 600
#         self.height = 500
#
#         self.setWindowIcon(QtGui.QIcon("LeetCode_logo.ico"))
#
#         self.InitUI()
#
#
#     def InitUI(self):
#
#         exitAct = QAction(QtGui.QIcon('exit.png'), 'Exit', self)
#         exitAct.setShortcut('Ctrl+Q')
#         exitAct.triggered.connect(self.CloseApp)
#
#         copyAct = QAction(QtGui.QIcon('copy.png'), 'Copy', self)
#         copyAct.setShortcut('Ctrl+C')
#
#         pasteAct = QAction(QtGui.QIcon('paste.png'), 'Paste', self)
#         pasteAct.setShortcut('Ctrl+V')
#
#         deleteAct = QAction(QtGui.QIcon('delete.png'), 'Delete', self)
#         deleteAct.setShortcut('Ctrl+D')
#
#         saveAct = QAction(QtGui.QIcon('save.png'), 'Save', self)
#         saveAct.setShortcut('Ctrl+S')
#
#         self.toolbar = self.addToolBar('Toolbar')
#
#         self.toolbar.addAction(exitAct)
#         self.toolbar.addAction(copyAct)
#         self.toolbar.addAction(pasteAct)
#         self.toolbar.addAction(deleteAct)
#         self.toolbar.addAction(saveAct)
#
#         self.setWindowTitle(self.title)
#         self.setGeometry(self.left, self.top, self.width, self.height)
#         self.show()
#
#     def CloseApp(self):
#         self.close()
#
#
# App = QApplication(sys.argv)
# window = Window()
# sys.exit(App.exec())

# # 15. LineEdit 한줄로 텍스트 입력 받을때 쓰는것
# import sys
# from PyQt5 import QtGui
# from PyQt5.QtWidgets import QMainWindow, QApplication, QWidget, QMessageBox, QPushButton, QLineEdit
#
#
# class Window(QMainWindow):
#     def __init__(self):
#         super().__init__()
#
#         self.title = "PyQt5 Toolbars"
#         self.top = 200
#         self.left = 200
#         self.width = 600
#         self.height = 500
#
#         self.setWindowIcon(QtGui.QIcon("LeetCode_logo.ico"))
#
#         self.InitUI()
#
#
#     def InitUI(self):
#
#         self.linedit = QLineEdit(self)
#         self.linedit.move(200, 200)
#         self.linedit.resize(280, 40)
#
#         self.button = QPushButton("Show Text", self)
#         self.button.move(270, 250)
#         self.button.clicked.connect(self.onClick)
#
#         self.setWindowTitle(self.title)
#         self.setGeometry(self.left, self.top, self.width, self.height)
#         self.show()
#
#     def onClick(self):
#         textValue = self.linedit.text()
#         QMessageBox.question(self, "Line Edit", "You Have Typed" + textValue,
#                              QMessageBox.Ok, QMessageBox.Ok)
#
# App = QApplication(sys.argv)
# window = Window()
# sys.exit(App.exec())

# # 16 Positioning Widgets Move함수를 이용해 위젯움직이는거
# from PyQt5.QtWidgets import QMainWindow, QApplication, QLabel
# from PyQt5 import QtGui
# import sys
#
# class Window(QMainWindow):
#     def __init__(self):
#         super().__init__()
#         self.title = "PyQt 5 Positioning"
#         self.top = 100
#         self.left = 100
#         self.width = 600
#         self.height = 500
#         self.InitWindow()
#
#     def InitWindow(self):
#         self.label1 = QLabel("Please", self)
#         self.label1.move(50, 50)
#
#         self.label2 = QLabel("Studing", self)
#         self.label2.move(100, 100)
#
#         self.label3 = QLabel("English", self)
#         self.label3.move(150, 150)
#
#         self.label4 = QLabel("Please", self)
#         self.label4.move(200, 200)
#
#         self.setWindowTitle(self.title)
#         self.setGeometry(self.left, self.top, self.width, self.height)
#
#         self.show()
#
# App = QApplication(sys.argv)
# window = Window()
# sys.exit(App.exec())


# # 17. HBoxLayout, VBoxLayout, GroupBox
# from PyQt5.QtWidgets import QMainWindow, QApplication, QDialog, QPushButton, QMessageBox, QVBoxLayout, QHBoxLayout, QGroupBox
# from PyQt5 import QtGui
# import sys
#
# class Window(QDialog):
#     def __init__(self):
#         super().__init__()
#         self.title = "PyQt 5 Layouts"
#         self.top = 100
#         self.left = 100
#         self.width = 300
#         self.height = 100
#         self.InitWindow()
#
#     def InitWindow(self):
#         self.setWindowTitle(self.title)
#         self.setGeometry(self.left, self.top, self.width, self.height)
#
#         self.HorizontalLayout()
#
#         vBox = QVBoxLayout()
#         vBox.addWidget(self.groupBox)
#         self.setLayout(vBox)
#         self.show()
#
#     def HorizontalLayout(self):
#         self.groupBox = QGroupBox("What is your favorite sport?")
#         hBoxlayout = QHBoxLayout()
#
#         button1 = QPushButton("Football", self)
#         button1.clicked.connect(self.button1Clicked)
#         hBoxlayout.addWidget(button1)
#
#         button2 = QPushButton("Cricket", self)
#         button2.clicked.connect(self.button2Clicked)
#         hBoxlayout.addWidget(button2)
#
#         button3 = QPushButton("Tennis", self)
#         button3.clicked.connect(self.button3Clicked)
#         hBoxlayout.addWidget(button3)
#
#         self.groupBox.setLayout(hBoxlayout)
#
#     def button1Clicked(self):
#         QMessageBox.information(self, "Football", "Yes I Like Football")
#
#     def button2Clicked(self):
#         QMessageBox.information(self, "Cricket", "Yes I Like Cricket")
#
#     def button3Clicked(self):
#         QMessageBox.information(self, "Tennis", "Yes I Like Tennis")
#
# App = QApplication(sys.argv)
# window = Window()
# sys.exit(App.exec())


# # 18. GridLayout
# from PyQt5.QtWidgets import QMainWindow, QApplication, QDialog, QGridLayout, QGroupBox, QPushButton, QVBoxLayout
# from PyQt5 import QtGui
# import sys
#
# class Window(QDialog):
#     def __init__(self):
#         super().__init__()
#         self.title = "PyQt 5 GridLayOut"
#         self.top = 100
#         self.left = 100
#         self.width = 300
#         self.height = 100
#         self.InitWindow()
#
#     def InitWindow(self):
#         self.setWindowTitle(self.title)
#         self.setGeometry(self.left, self.top, self.width, self.height)
#         self.gridLayoutCreation()
#         vboxLayout  = QVBoxLayout()
#         vboxLayout.addWidget(self.groupBox)
#         self.setLayout(vboxLayout)
#         self.show()
#
#     def gridLayoutCreation(self):
#         self.groupBox = QGroupBox("Grid Layout Example")
#
#         gridLayout = QGridLayout()
#         # 위치 줄 수 있네
#         gridLayout.addWidget(QPushButton('1'), 0, 0)
#         gridLayout.addWidget(QPushButton('2'), 0, 1)
#         gridLayout.addWidget(QPushButton('3'), 0, 2)
#
#         gridLayout.addWidget(QPushButton('4'), 2, 0)
#         gridLayout.addWidget(QPushButton('5'), 1, 1)
#         gridLayout.addWidget(QPushButton('6'), 1, 2)
#
#         self.groupBox.setLayout(gridLayout)
#
#
# App = QApplication(sys.argv)
# window = Window()
# sys.exit(App.exec())


# 19. QCheckbox
# from PyQt5.QtWidgets import QApplication, QMainWindow, QLabel, QCheckBox
# from PyQt5.QtCore import Qt
# import sys


# class Window(QMainWindow):
#     def __init__(self):
#         super().__init__()
#         self.title = "PyQt 5 CheckBoxes"
#         self.top = 100
#         self.left = 100
#         self.width = 300
#         self.height = 100
#         self.InitWindow()
#
#     def InitWindow(self):
#
#         checkBox = QCheckBox("Do you like Football ?", self)
#         checkBox.move(20, 20)
#         checkBox.toggle()
#
#         checkBox.stateChanged.connect(self.checBoxChanged)
#
#         self.label = QLabel("Hello", self)
#         self.label.resize(1000, 20)
#         self.label.move(20, 40)
#
#         self.setWindowTitle(self.title)
#         self.setGeometry(self.left, self.top, self.width, self.height)
#
#         self.show()
#
#
#     def checBoxChanged(self, state):
#         if state == Qt.Checked:
#             self.label.setText("Yes I like Football")
#         else:
#             self.label.setText("No I Dont Like FootBall")
#
#
# App = QApplication(sys.argv)
# window = Window()
# sys.exit(App.exec())


# # 20. QSPinkbox + - 마우스로 클릭해서 숫자 조정하는거
# from PyQt5.QtWidgets import QApplication, QMainWindow, QSpinBox, QVBoxLayout, QLabel, QDoubleSpinBox, QPushButton
# import sys


# class Window(QMainWindow):
#     def __init__(self):
#         super().__init__()
#         self.title = "PyQt 5 SPinBoxes"
#         self.top = 100
#         self.left = 100
#         self.width = 300
#         self.height = 100
#         #self.InitWindow()
#         self.btn = QPushButton("안녕", self)
#         self.btn.move(150, 0)
#         self.setWindowTitle(self.title)
#         self.setGeometry(self.left, self.top, self.width, self.height)
#         #self.setLayout(vBoxLayout)
#         self.show()

#     def InitWindow(self):

#         vBoxLayout = QVBoxLayout()
#         self.label = QLabel("Current Value", self)
#         self.label.move(20, 20)
#         self.label.resize(200, 40)
#         vBoxLayout.addWidget(self.label)

#         self.spinBox = QSpinBox(self)
#         self.spinBox.move(20, 0)
#         self.spinBox.valueChanged.connect(self.valueChanged)
#         self.spinBox.setMaximum(500)

#         self.doubleSpinBox = QDoubleSpinBox()
#         #self.doubleSpinBox.move(150, 0)


#         self.setWindowTitle(self.title)
#         self.setGeometry(self.left, self.top, self.width, self.height)
#         #self.setLayout(vBoxLayout)
#         self.show()

#     def valueChanged(self):
#         self.label.setText("Current Value " + str(self.spinBox.text()))

# App = QApplication(sys.argv)
# window = Window()
# sys.exit(App.exec())


# # 21. QPixmap image add
# from PyQt5.QtWidgets import QApplication, QMainWindow, QLabel
# from PyQt5.QtGui import QPixmap
# import sys
#
#
# class Window(QMainWindow):
#     def __init__(self):
#         super().__init__()
#         self.title = "PyQt 5 Image"
#         self.top = 100
#         self.left = 100
#         self.width = 600
#         self.height = 500
#         self.InitWindow()
#
#     def InitWindow(self):
#         self.label = QLabel(self)
#         self.label.setPixmap(QPixmap('image.jpg'))
#         self.label.setGeometry(60, 50, 1000, 700)
#
#         self.setWindowTitle(self.title)
#         self.setGeometry(self.left, self.top, self.width, self.height)
#
#         self.show()
#
#
#
# App = QApplication(sys.argv)
# window = Window()
# sys.exit(App.exec())



# # 22. QSlider1
# from PyQt5.QtWidgets import QApplication, QMainWindow, QWidget, QLineEdit, QSlider, QVBoxLayout
# from PyQt5.QtCore import Qt
# import sys
#
#
# class Window(QWidget):
#     def __init__(self):
#         super().__init__()
#         self.title = "PyQt 5 QSlider"
#         self.top = 100
#         self.left = 100
#         self.width = 600
#         self.height = 500
#         self.InitWindow()
#
#     def InitWindow(self):
#
#         vboxLayout = QVBoxLayout()
#         self.lineEdit = QLineEdit(self)
#         self.lineEdit.move(100, 50)
#         vboxLayout.addWidget(self.lineEdit)
#
#         self.slider = QSlider(Qt.Horizontal, self)
#         self.slider.move(100, 20)
#         self.slider.setMinimum(1)
#         self.slider.setMaximum(99)
#         self.slider.setValue(20)
#         self.slider.setTickPosition(QSlider.TicksBelow)
#         self.slider.setTickInterval(10)
#         self.slider.valueChanged.connect(self.changedValude)
#         vboxLayout.addWidget(self.slider)
#
#         self.setWindowTitle(self.title)
#         self.setGeometry(self.left, self.top, self.width, self.height)
#
#         self.show()
#
#     def changedValude(self):
#         size = str(self.slider.value())
#         self.lineEdit.setText(size)
#
#
# App = QApplication(sys.argv)
# window = Window()
# sys.exit(App.exec())


# # 23.
# from PyQt5.QtWidgets import QApplication, QMainWindow
# import sys
#
#
# class Window(QMainWindow):
#     def __init__(self):
#         super().__init__()
#         self.title = "PyQt 5 "
#         self.top = 100
#         self.left = 100
#         self.width = 600
#         self.height = 500
#         self.InitWindow()
#
#     def InitWindow(self):
#         self.setWindowTitle(self.title)
#         self.setGeometry(self.left, self.top, self.width, self.height)
#
#         self.show()
#
#
#
# App = QApplication(sys.argv)
# window = Window()
# sys.exit(App.exec())

# # QListWidget
# from PyQt5.QtWidgets import QApplication, QWidget, QVBoxLayout, QListWidget, QLabel
# import sys
# from PyQt5 import QtGui


# class Window(QWidget):
#     def __init__(self):
#         super().__init__()

#         self.title = "PyQt5 QListWidget"
#         self.left = 500
#         self.top = 200
#         self.width = 300
#         self.height = 500
#         self.iconName = 'temp.png'

#         self.InitUI()

#     def InitUI(self):
#         self.setWindowTitle(self.title)
#         self.setWindowIcon(QtGui.QIcon(self.iconName))
#         self.setGeometry(self.left, self.top, self.width, self.height)

#         vbox = QVBoxLayout()

#         self.list = QListWidget()
#         self.list.insertItem(0, "Python")
#         self.list.insertItem(1, "Java")
#         self.list.insertItem(1, "C++")
#         self.list.insertItem(1, "C#")
#         self.list.insertItem(1, "Ruby")
#         self.list.insertItem(1, "Kotlin")

#         self.list.clicked.connect(self.listview_clicked)

#         self.label = QLabel()
#         self.label.setFont(QtGui.QFont("Sanserif", 15))
#         vbox.addWidget(self.label)
#         vbox.addWidget(self.list)
#         self.setLayout(vbox)
#         self.show()
    
#     def listview_clicked(self):
#         item = self.list.currentItem()
#         self.label.setText(str(item.text()))
        
# App = QApplication(sys.argv)
# window = Window()
# sys.exit(App.exec())




# from PyQt5 import QtGui
# from PyQt5.QtWidgets import QApplication, QWidget, QPlainTextEdit, QVBoxLayout
# import sys


# class Window(QWidget):
#     def __init__(self):
#         super().__init__()

#         self.title = "PyQt5 Plain TextEdit"
#         self.top = 200
#         self.left = 500
#         self.width = 400
#         self.height = 300


#         self.InitWindow()


#     def InitWindow(self):
#         self.setWindowIcon(QtGui.QIcon("icon.png"))
#         self.setWindowTitle(self.title)
#         self.setGeometry(self.left, self.top, self.width, self.height)

#         vbox = QVBoxLayout()
#         plainText = QPlainTextEdit()
#         plainText.setPlaceholderText("This is some text for our plaintextedit")

#         #plainText.setReadOnly(True)


#         text = "Please subscribe the channel and like the videos"

#         plainText.appendPlainText(text)
#         plainText.setPlaceholderText(text)
#         plainText.setUndoRedoEnabled(True)





#         vbox.addWidget(plainText)

#         self.setLayout(vbox)


#         self.show()



# App = QApplication(sys.argv)
# window = Window()
# sys.exit(App.exec())


# # 콘솔 입력 가능 예제
# import platform
# import sys

# from PyQt5 import QtCore, QtGui, QtWidgets


# class NativeMessenger(QtCore.QObject):
#     messageChanged = QtCore.pyqtSignal(str)

#     def __init__(self, parent=None):
#         super().__init__(parent)

#         self.m_qin = QtCore.QFile()

#         self.m_qin.open(
#             sys.stdin.fileno(), QtCore.QIODevice.ReadOnly | QtCore.QIODevice.Unbuffered
#         )

#         if platform.system() == "Windows":
#             import win32api

#             if sys.platform == "win32":
#                 import os
#                 import msvcrt

#                 if platform.python_implementation() == "PyPy":
#                     os.fdopen(fh.fileno(), "wb", 0)
#                 else:
#                     msvcrt.setmode(sys.stdin.fileno(), os.O_BINARY)

#             self.m_notifier = QtCore.QWinEventNotifier(
#                 win32api.GetStdHandle(win32api.STD_INPUT_HANDLE)
#             )

#         else:
#             self.m_notifier = QtCore.QSocketNotifier(
#                 sys.stdin.fileno(), QtCore.QSocketNotifier.Read, self
#             )

#         self.m_notifier.activated.connect(self.readyRead)

#     @QtCore.pyqtSlot()
#     def readyRead(self):
#         line = self.m_qin.readLine().data().decode().strip()
#         self.messageChanged.emit(line)


# if __name__ == "__main__":
#     app = QtWidgets.QApplication(sys.argv)

#     w = QtWidgets.QLabel(alignment=QtCore.Qt.AlignCenter)
#     w.resize(640, 480)
#     w.show()

#     messenger = NativeMessenger()
#     messenger.messageChanged.connect(w.setText)

#     sys.exit(app.exec_())