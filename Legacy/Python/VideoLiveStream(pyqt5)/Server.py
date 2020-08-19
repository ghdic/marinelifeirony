from SocketSendRecv import SendRecv
import socket
import sys

from PyQt5.QtWidgets import QApplication
from PyQt5.QtCore import QObject

class Server(QObject):
    def __init__(self, ip="0.0.0.0", port=8888):
        super().__init__()
        self.host_ip = ip
        self.host_port = port
        self.cur_con = None
        self.sock = None
        self.create_socket()
        self.controller = self.accept_socket()

    def create_socket(self):
        try:
            self.sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
            self.sock.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
            self.sock.bind((self.host_ip, self.host_port))
            self.sock.listen(2)
        except socket.error as e:
            print(e)

    def accept_socket(self):
        try:
            conn, address = self.sock.accept()
            self.sock.setblocking(1)
            controller = SendRecv(conn)
            return controller
        except:
            return None



App = QApplication(sys.argv)
s = Server("0.0.0.0", 8888)
sys.exit(App.exec())