# 카카오메세지봇

## 세팅
```text
pip install -r requirements.txt
```

> [라이브러리 설치가 안될 경우 여기서 버전에 맞는것 설치](https://www.lfd.uci.edu/~gohlke/pythonlibs/)

## 실행
```text
python main.py
```

## 기능
```text
!help : 명령어 출력
!인사
!stock [Ticker] : 티커 가격 정보 출력
!info [Ticker] : 티커 정보
!history [Ticker] [Term(day)] : 현재 시점 기준으로 open, close history data
!forecast [Ticker] : 주식 프라이스
!shareholder [Ticker] : 소유주
!news [Ticker] : 최근 뉴스
!chart [Ticker] : 차트
!comprehensive [Ticker] # 통합(시간 오래걸림)
!rank [SNS] [TIME] : 최신 인기 주식 티커
[lm(Last Mover, 최근 언급량이 많아진것), wsb(Wall Street Bets), sm(Stock Market), ps(Penny Stocks), iv(Investing), s(Stocks), rps(RobinHood Penny Stocks, dt(Day Trading), spac(SPACs), ws(Weed Stocks),  tw(Twitter), gogl(Google), option(Option)]
[6h, 12h, 24h, 48h, 7d]
```

## 수정
### 방 설정
`main.py`에서 `sched = Scheduler(['방이름1', 방이름2])` 이 부분에 봇을 활성화 할 방이름을 적어줌

`kakaotalkchatbot.py`에서 `def open_chat_room(self, chat_room_name, kind="채팅방"):` 부분에 채팅방 목록에서 검색하여 열고 싶은 경우 `kind="채팅방"`, 연락처 목록에서 검색하여 열고 싶은 경우 `kind="연락처"`로 수정

### 기능 추가
`command.py`에 추가하고 싶은 기능 함수를 추가

`scheduler.py`에 있는 `def execute(self):`에 원하는 명령어를 추가하고, `command.py`에 추가했던 함수를 가져다가 실행하게 한다


# 알림음 해결
텍스트를 복사할때 마다 알림음이 뜨는데, 이건 컴퓨터 설정으로 없애줘야 한다. 필요하다면 아래 설정을 따라하자

![알림음1](image/알림음1.png)
![알림음2](image/알림음2.png)
![알림음3](image/알림음3.png)