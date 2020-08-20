from SocketSendRecv import SendRecv
import socket
import sys
import time
from PyQt5.QtWidgets import QApplication
from PyQt5.QtCore import QObject
from VideoStream import SettingVideoOption

class Server(QObject):
    def __init__(self, ip="0.0.0.0", port=8888):
        super().__init__()
        self.host_ip = ip
        self.host_port = port
        self.cur_con = None
        self.sock = self.create_socket(self.host_ip, self.host_port, socket.SOCK_STREAM, 2)
        self.video_sock = None
        self.video_controller = None
        self.video_port = 10004

        self.controller, self.client_ip = self.accept_socket(self.sock)
        self.App = QApplication(sys.argv)
        self.window = SettingVideoOption(self, self.controller, self.client_ip)

        sys.exit(self.App.exec())

    def create_socket(self, ip, port, kind, cnt):
        try:
            sock = socket.socket(socket.AF_INET, kind)
            sock.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
            sock.bind((self.host_ip, self.host_port))
            sock.listen(cnt)
        except socket.error as e:
            print(e)
            time.sleep(10)
            sock = self.create_socket(sock, ip, port, kind, cnt)
        return sock

    def accept_socket(self, sock):
        try:
            conn, address = sock.accept()
            sock.setblocking(1)
            controller = SendRecv(conn)
            return (controller, f'{address[0]}:{str(address[1])}')
        except:
            return (None, None)


    def start(self):
        self.video_sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        self.video_sock.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
        self.video_sock.bind((self.host_ip, self.video_port))
        self.video_sock.listen(1)
        self.controller.send(":start")
        try:
            conn, address = self.video_sock.accept()
            self.video_sock.setblocking(1)
            self.video_controller = SendRecv(conn)
        except socket.error as e:
            print(e)



App = QApplication(sys.argv)
s = Server("0.0.0.0", 8888)
sys.exit(App.exec())