import socket
sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
sock.sendto("hihih".encode('cp949'), ("127.0.0.1", 5005))