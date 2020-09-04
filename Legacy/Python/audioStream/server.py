from SocketSendRecv import SendRecv
import socket
import pyaudio
import wave
import sys
from PyQt5.QtCore import QTimer, pyqtSlot, QCoreApplication, QObject, QEventLoop
import time


class Server(QObject):
    def __init__(self, ip="0.0.0.0", port=8888):
        super().__init__()
        self.host_ip = ip
        self.host_port = 8888
        self.cur_con = self.create_controller(self.host_ip, self.host_port)
        self.timer = QTimer(interval=5)
        self.timer.timeout.connect(self.updateFrame)
        self.timer.start()
        self.rate = 44100
        self.frames_per_buffer = 1024
        self.channels = 2
        self.format = pyaudio.paInt16
        self.audio_filename = "temp_audio.wav"
        self.audio = pyaudio.PyAudio()
        self.output_audio = None
        self.wavefile = self.prepare_file(self.audio_filename)

        self.start()
        print("녹음 시작")
        loop = QEventLoop()
        QTimer.singleShot(10000, loop.quit)
        loop.exec()
        print("녹음 끝")
        self.cur_con.sock.close()

        self.stop()

    def create_socket(self, ip, port):
        try:
            sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
            sock.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
            sock.bind((ip, port))
            sock.listen(1)
        except socket.error as e:
            print(e)
            sock = self.create_socket(ip, port)
        return sock

    def accept_socket(self, sock):
        try:
            conn, addr = sock.accept()
            sock.setblocking(1)
            controller = SendRecv(conn)
            print(f'{addr[0]}:{str(addr[1])}와 정상 연결되었습니다')
            return controller
        except socket.error as e:
            print(e)
            sys.exit(-1)

    def create_controller(self, ip, port):
        sock = self.create_socket(ip, port)
        return self.accept_socket(sock)

    def __enter__(self):
        return self

    def __exit__(self, exception, value, traceback):
        self.close()

    def prepare_file(self, fname="temp.wav", mode='wb'):
        wavefile = wave.open(fname, mode)
        wavefile.setnchannels(self.channels)
        wavefile.setsampwidth(self.audio.get_sample_size(pyaudio.paInt16))
        wavefile.setframerate(self.rate)
        return wavefile

    def start(self):
        self.output_audio = self.audio.open(format=self.format,
                                            channels=self.channels,
                                            rate=self.rate,
                                            output=True,
                                            frames_per_buffer=self.frames_per_buffer
                                            )
        #self.output_audio.start_stream()
        print("타이머 시작")
        self.timer.start()

    def updateFrame(self):
        in_data = self.cur_con.recv()
        self.output_audio.write(in_data)
        self.wavefile.writeframes(in_data)

    def stop(self):
        #self.output_audio.stop_stream()
        self.timer.stop()
        #print("소리 재생")
        #self.output_audio
        #time.sleep(10)
        #print("소리 재생 끝")
        #self.output_audio.stop_stream()

    def close(self):
        self.output_audio.close()
        self.audio.terminate()
        self.wavefile.close()


app = QCoreApplication(sys.argv)
s = Server()
sys.exit(app.exec())