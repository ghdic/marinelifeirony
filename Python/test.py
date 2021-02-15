# import os
# import cv2
# import numpy as np
# from PyQt5 import QtCore, QtGui, QtWidgets                     # uic
# from PyQt5.QtWidgets import (QApplication, QMainWindow, QPushButton, QWidget, 
#                              QLabel, QVBoxLayout)              # +++


# class Ui_Form(object):
#     def setupUi(self, Form):
#         Form.setObjectName("Form")
#         Form.resize(525, 386)
#         self.horizontalLayout = QtWidgets.QHBoxLayout(Form)
#         self.horizontalLayout.setObjectName("horizontalLayout")
#         self.verticalLayout = QtWidgets.QVBoxLayout()
#         self.verticalLayout.setObjectName("verticalLayout")

#         self.image_label = QtWidgets.QLabel(Form)
#         self.image_label.setText("")
#         self.image_label.setObjectName("image_label")
#         self.verticalLayout.addWidget(self.image_label)

#         self.control_bt = QtWidgets.QPushButton(Form)
#         self.control_bt.setObjectName("control_bt")
#         self.verticalLayout.addWidget(self.control_bt)

#         self.capture = QtWidgets.QPushButton(Form)
#         self.capture.setObjectName("capture")
#         self.verticalLayout.addWidget(self.capture)

#         self.horizontalLayout.addLayout(self.verticalLayout)

#         self.retranslateUi(Form)
#         QtCore.QMetaObject.connectSlotsByName(Form)

#     def retranslateUi(self, Form):
#         _translate = QtCore.QCoreApplication.translate
#         Form.setWindowTitle(_translate("Form",     "Cam view"))
#         self.control_bt.setText(_translate("Form", "Start"))
#         self.capture.setText(_translate("Form",    "Capture"))



# class video (QtWidgets.QDialog, Ui_Form):
#     def __init__(self):
#         super().__init__()                  

# #        uic.loadUi('test2.ui',self)                           # ---
#         self.setupUi(self)                                     # +++

#         self.control_bt.clicked.connect(self.start_webcam)
#         self.capture.clicked.connect(self.capture_image)
#         self.capture.clicked.connect(self.startUIWindow)       # - ()

#         self.image_label.setScaledContents(True)

#         self.cap = None                                        #  -capture <-> +cap

#         self.timer = QtCore.QTimer(self, interval=5)
#         self.timer.timeout.connect(self.update_frame)
#         self._image_counter = 0

#     @QtCore.pyqtSlot()
#     def start_webcam(self):
#         if self.cap is None:
#             self.cap = cv2.VideoCapture(0)
#             self.cap.set(cv2.CAP_PROP_FRAME_HEIGHT, 480)
#             self.cap.set(cv2.CAP_PROP_FRAME_WIDTH,  640)
#         self.timer.start()

#     @QtCore.pyqtSlot()
#     def update_frame(self):
#         ret, image = self.cap.read()
#         simage     = cv2.flip(image, 1)
#         self.displayImage(image, True)

#     @QtCore.pyqtSlot()
#     def capture_image(self):
#         flag, frame = self.cap.read()
#         path = r''                         # 
#         if flag:
#             QtWidgets.QApplication.beep()
#             name = "my_image.jpg"
#             cv2.imwrite(os.path.join(path, name), frame)
#             self._image_counter += 1

#     def displayImage(self, img, window=True):
#         qformat = QtGui.QImage.Format_Indexed8
#         if len(img.shape)==3 :
#             if img.shape[2]==4:
#                 qformat = QtGui.QImage.Format_RGBA8888
#             else:
#                 qformat = QtGui.QImage.Format_RGB888
#         outImage = QtGui.QImage(img, img.shape[1], img.shape[0], img.strides[0], qformat)
#         outImage = outImage.rgbSwapped()
#         if window:
#             self.image_label.setPixmap(QtGui.QPixmap.fromImage(outImage))

#     def startUIWindow(self):
#         self.Window = UIWindow()                               # - self
#         self.setWindowTitle("UIWindow")

# #        self.setCentralWidget(self.Window)
# #        self.show()
# ### +++ vvv
#         self.Window.ToolsBTN.clicked.connect(self.goWindow1)

#         self.hide()
#         self.Window.show()

#     def goWindow1(self):
#         self.show()
#         self.Window.hide()
# ### +++ ^^^


# class UIWindow(QWidget):
#     def __init__(self, parent=None):
#         super(UIWindow, self).__init__(parent)

#         self.resize(300, 300)
#         self.label = QLabel("Hello World", alignment=QtCore.Qt.AlignCenter)

#         self.ToolsBTN = QPushButton('text')
# #        self.ToolsBTN.move(50, 350)

#         self.v_box = QVBoxLayout()
#         self.v_box.addWidget(self.label)
#         self.v_box.addWidget(self.ToolsBTN)
#         self.setLayout(self.v_box)


# if __name__=='__main__':
#     import sys
#     app = QtWidgets.QApplication(sys.argv)
#     window = video()
#     window.setWindowTitle('main code')
#     window.show()
#     sys.exit(app.exec_())


import sys
import time
import numpy as np
import pyaudio
from PyQt5 import QtGui, QtWidgets, QtCore
import matplotlib
import matplotlib.gridspec as gridspec
from matplotlib.backends.backend_qt5agg import FigureCanvasQTAgg as FigureCanvas
from matplotlib.figure import Figure
matplotlib.use('Qt5Agg')


class Window(QtWidgets.QMainWindow):
    def __init__(self):  # template for rest of GUI,
        super(Window, self).__init__()
        self.setGeometry(50, 50, 1500, 900)
        self.centralwidget = QtWidgets.QWidget(self)
        self.centralwidget.setObjectName("centralwidget")

        self.channels = 2  # StereoSignal
        self.fs = 44100  # Samplingrate
        self.Chunks = 4096  # Buffersize
        self.streamstart = False
        self.audiodata = []  # to buffer streaming-values in

        self.tapeLength = 4  # seconds
        self.tape = np.empty(self.fs * self.tapeLength) * np.nan  # tape to store signal-chunks

        self.home()

    def home(self):
        btn = QtWidgets.QPushButton("Stream and Plot", self)  # Button to start streaming
        btn.clicked.connect(self.plot)
        btn.move(100, 100)

        btn = QtWidgets.QPushButton("Stop", self)  # Button to stop streaming
        btn.clicked.connect(self.stop_signal)
        btn.move(200, 100)

        btn = QtWidgets.QPushButton("Evaluate", self)  # Button for the Evaluation
        btn.clicked.connect(self.evaluation)
        btn.move(100, 140)

        self.textEdit = QtWidgets.QTextEdit(self)  # Show text of evaluation
        self.textEdit.move(250, 170)
        self.textEdit.resize(200, 200)

        self.scrollArea = QtWidgets.QScrollArea(self)  # Scroll-Area to plot signal (Figure) in
        self.scrollArea.move(75, 400)
        self.scrollArea.resize(600, 300)
        self.scrollArea.setWidgetResizable(False)

        self.figure = Figure((15, 2.8), dpi=100)  # figure instance (to plot on) F(width, height, ...)
        self.canvas = FigureCanvas(self.figure)
        self.scrollArea.setWidget(self.canvas)
        self.gs = gridspec.GridSpec(1, 1)
        self.ax = self.figure.add_subplot(self.gs[0])
        self.figure.subplots_adjust(left=0.05)

    def start_stream(self, start=True):
        """start a Signal-Stream with pyAudio, with callback (to also play immediately)"""
        if start is True:
            self.p = pyaudio.PyAudio()
            self.stream = self.p.open(format=pyaudio.paFloat32, channels=self.channels, rate=self.fs, input=True,
                                  output=True, frames_per_buffer=self.Chunks, stream_callback=self.callback)
            self.streamstart = True
            self.stream.start_stream()
            print("Recording...")

    def callback(self, in_data, frame_count, time_info, flag):
        """Callback-Function which stores the streaming data in a list"""
        data = np.fromstring(np.array(in_data).flatten(), dtype=np.float32)
        self.audiodata = data
        print("appending...")
        return data, pyaudio.paContinue

    def tape_add(self):
        """add chunks from (callback)-list to tapes for left and right Signalparts"""
        if self.streamstart:
            self.tape[:-self.Chunks] = self.tape[self.Chunks:]
            self.taper = self.tape  # tape for right signal
            self.tapel = self.tape  # tape for left signal
            self.tapel[-self.Chunks:] = self.audiodata[::2]
            self.taper[-self.Chunks:] = self.audiodata[1::2]
            print("taping...")
        else:
            print("No streaming values found")

    def plot(self):
        """Start the streaming an plot the signal"""
        print("(Stereo-)Signal streaming & plotting...")

        self.plot_thread = PlotThead(self)
        self.plot_thread.start()

    def stop_signal(self):
        print("Stopping Signal.")
        if self.streamstart:
            print("Stop Recording")
            self.stream.stop_stream()
            self.stream.close()
            self.p.terminate()
            self.streamstart = False
            self.plot_thread.stop()
        else:
            pass

    def evaluation(self):
        """ Start the evaluation in another Thread"""
        self.thread = WorkerThread(self, self.taper, self.tapel)

        self.thread.start()  # start thread


class PlotThead(QtCore.QThread):
    def __init__(self, window):
        QtCore.QThread.__init__(self)
        self.deamon = True
        self.__is_running = True
        self.window = window

    def stop(self):
        self.__is_running = False

    def run(self):

        if self.window.streamstart:
            pass
        else:
            self.window.start_stream(start=True)

        self.window.t1 = time.time()
        time.sleep(0.5)

        while self.window.streamstart and self.__is_running:
            print("Plotting...")
            self.window.tape_add()

            self.window.timeArray = np.arange(self.window.taper.size)
            self.window.timeArray = (self.window.timeArray / self.window.fs) * 1000  # scale to milliseconds

            self.window.ax.clear()
            self.window.ax.plot(self.window.timeArray, (self.window.taper / np.max(np.abs(self.window.taper))), '-b')
            self.window.ax.grid()
            self.window.ax.set_ylabel("Amplitude")
            self.window.ax.set_xlabel("Samples")
            self.window.canvas.draw()


class WorkerThread(QtCore.QThread):
    def __init__(self, window, taper, tapel):  # take the tape-parts from the original thread
        QtCore.QThread.__init__(self)
        self.__taper = taper
        self.__tapel = tapel
        self.deamon = True
        self.window = window

    def run(self):
        """Do evaluation, later mor, for now just some calculations"""
        print("Evaluating Signal")

        self.tpr = self.__taper.astype(np.float32, order='C') / 32768  # here the GUI freezes and then exits
        self.tpl = self.__tapel.astype(np.float32, order='C') / 32768
        # cut nan-values if there are some
        self.r = self.tpr[~np.isnan(self.tpr)]
        self.l = self.tpl[~np.isnan(self.tpl)]

        # normalize signals
        self.left2 = (self.l / np.max(np.abs(self.l)))
        self.right2 = (self.r / np.max(np.abs(self.r)))
        self.norm_audio2 = np.array((self.left2, self.right2))  # like channels (in de_interlace)

        # do some calculations

        self.databew = """ Mute, Loudness and PSNR/MOS...
                  Dominant fundamental frequencies etc.
                """
        print(self.databew)
        self.window.textEdit.append(self.databew)  # would this work?


def main():
    app = QtWidgets.QApplication(sys.argv)
    GUI = Window()
    GUI.show()

    sys.exit(app.exec_())


main()