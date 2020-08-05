

class Server:
    def __init__(self, ip, port):
        self.host_ip = ip # 로컬 테스트시 'localhost', 외부 테스트시 포트포워딩 & '0.0.0.0'
        self.host_port = port

        self.all_connections = {} # 연결된 소켓 저장 dict[ip] = con


    def select_ip(self, target_ip):
        """ 명령을 내릴 연결된 ip를 선택한다 """
        pass

    def refresh(self):
        """ 연결된 클라이언트가 연결되어 있는지 확인&갱신 """


        return self.all_connections.keys()
