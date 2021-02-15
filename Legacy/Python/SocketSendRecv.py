import struct
# import socket


class SendRecv:
    """ 소켓으로 데이터를 주고받는 객체 """
    def __init__(self, sock):
        self.sock = sock
    def send(self, data):
        """ data 길이 + data를 보냄 I == int이므로 2^32-1 약 21억 데이터 한번에 보내기 가능"""
        pkt = struct.pack('>I', len(data)) + data
        self.sock.sendall(pkt)

    def recv(self):
        """ data 길이를 읽고 그만큼 데이터를 받음 """
        pktlen = self.recvall(4)
        if not pktlen: return b""
        pktlen = struct.unpack(">I", pktlen)[0]
        return self.recvall(pktlen)

    def recvall(self, n):
        packet = b""
        while len(packet) < n:
            frame = self.sock.recv(n - len(packet))
            if not frame: return None
            packet += frame
        return packet