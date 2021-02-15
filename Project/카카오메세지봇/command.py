from kakaotalkchatbot import KakaoTalkChatBot
from msg_manager import MsgManager


class Command:
    help_msg = ("""!help : 명령어 출력
                !인사
                !stock [Ticker] : 티커 가격 정보 출력
                !info [Ticker] : 
                !history [Ticker] [Term(day)] : 현재 시점 기준으로 open, close history data
                !forecast [Ticker] : 주식 프라이스
                !shareholder [Ticker] : 소유주
                !news [Ticker] : 최근 뉴스
                !chart [Ticker] : 차트
                !comprehensive [Ticker] # 통합(시간 오래걸림)""")

    def __init__(self):
        self.chat_bot = KakaoTalkChatBot()
        self.msg_manager = MsgManager()

    def help(self, chatroom_name):
        self.chat_bot.kakao_sendtext(self.help_msg, chatroom_name)
