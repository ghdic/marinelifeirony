from kakaotalkchatbot import KakaoTalkChatBot
import textwrap

class Command:
    help_msg = textwrap.dedent("""\
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
                [6h, 12h, 24h, 48h, 7d]""")

    def __init__(self):
        self.chat_bot = KakaoTalkChatBot()

    def help(self, chatroom_name):
        self.chat_bot.kakao_sendtext(self.help_msg, chatroom_name)
