import socket
import sys

# 소켓을 만들고 컴퓨터와 연결한다
def create_socket():
    try:
        global host
        global port
        global s
        host = "127.0.0.1"
        port = 8888
        s = socket.socket()
    except socket.error as msg:
        print("Socket creation error : " + str(msg))


# 연결을 위한 바인딩 & 리스닝
def bind_socket():
    try:
        global host
        global port
        global s

        print("Binding the Port : " + str(port))

        s.bind((host, port))
        s.listen(5)

    except socket.error as msg:
        print("Socket Binding error" + str(msg) + "\n" + "Retrying...")
        bind_socket()


# 연결된 클라이언트와 통신을 위한 새로운 소켓을 생성
def socket_accpet():
    conn, address = s.accept()
    print("Connection has been established! : " + address[0] + ":" + str(address[1]))
    send_commands(conn)
    conn.close()

# 클라이언트 CLI에 명령을 전달
def send_commands(conn):
    while True:
        cmd = input()
        if cmd == 'quit':
            conn.close()
            s.close()
            sys.exit()
        if len(str.encode(cmd)) > 0:
            conn.send(str.encode(cmd))
            client_response = str(conn.recv(1024), "utf-8")
            print(client_response, end="")


def main():
    create_socket()
    bind_socket()
    socket_accpet()


main()


