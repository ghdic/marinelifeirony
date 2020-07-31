import socket

sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
address = ("0.0.0.0", 8888)
sock.bind(address)
while True:
    data, addr = sock.recvfrom(1024)
    print(data)
    print(addr)
    