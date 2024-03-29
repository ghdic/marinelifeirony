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
        self.video_controller = None
        self.video_stream_controller = None
        self.video_port = port + 1
        self.video_stream_port = port + 2
        self.controller, self.client_ip = self.create_controller(self.host_ip, self.host_port, socket.SOCK_STREAM, 2)
        self.App = QApplication(sys.argv)
        self.window = SettingVideoOption(self)

        sys.exit(self.App.exec())

    def create_socket(self, ip, port, kind, cnt):
        try:
            sock = socket.socket(socket.AF_INET, kind)
            sock.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
            sock.bind((ip, port))
            if kind == socket.SOCK_STREAM:
                sock.listen(cnt)
        except socket.error as e:
            print(e)
            time.sleep(10)
            sock = self.create_socket(ip, port, kind, cnt)
        return sock

    def accept_socket(self, sock):
        try:
            conn, address = sock.accept()
            sock.setblocking(1)
            controller = SendRecv(conn)
            print(f'{address[0]}:{str(address[1])}와 정상 연결되었습니다')
            return (controller, f'{address[0]}:{str(address[1])}')
        except socket.error as e:
            print(e)
            return (None, None)

    def create_controller(self, ip, port, kind, cnt):
        sock = self.create_socket(ip, port, kind, cnt)
        return self.accept_socket(sock)



App = QApplication(sys.argv)
s = Server("0.0.0.0", 8888)
sys.exit(App.exec())