# python socket

https://www.youtube.com/watch?v=6jteAOmdsYg&list=PLhTjy8cBISErYuLZUvVOYsR1giva2payF


## 함수

* socket() : tcp 소켓을 생성한다
* bind() : 소켓에 포트번호를 부여한다
* listen() : 클라이언트 접속을 기다린다
* accept() : 클라이언트로 접속이 되면 이 함수를 호출해 연결에 대한 새로운 소켓을 생성
* send() & recv() : 서버 소켓과 새로만든 클라이언트 소켓을 통해 데이터를 주고 받는다
* close() : 연결을 닫는다

## socket family(주소 체계)

* AF_INET : (str host, int port)
* AF_INET6 : (str host, int port, {sin6_flowinfo flowinfo, sin6_scope_id scopeid})
* AF_NETLINK : (addr_type, v1, v2, v3 [, scope])
* AF_BLUETOOTH : 
* AF_ALG :
* AF_VSOCK
* AF_PACKET : (ifname, proto[, pkttype[, hatype[, addr]]])