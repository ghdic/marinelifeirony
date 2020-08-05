C언어에 struct 구조체를 파이썬으로 사용하기 위해 구현된 모듈

구조체를 bytes 오브젝트로 표현하여 네트워크에서 바이너리로 주고 받을때 유용

* struct.pack(format, [v1, v2, ...])
* struct.unpack(foramt, buffer)
* struct.pack_into(format, buffer, offset, [v1, v2 ... ])
* struct.unpack_from(format, buffer, offset) (offseet은 시작점을 의미. 바이트 단위)

### 포맷
* ? : boolean
* h : short
* l : long
* i : int
* f : float
* q : long long int

* @ : native
* = : natvie
* < : little-endian
* > : big-endian
* ! : network(big-endian)