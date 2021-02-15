from apscheduler.schedulers.background import BackgroundScheduler
import time
from queue import Queue
from threading import Thread
from kakaotalkchatbot import KakaoTalkChatBot
from msg_manager import MsgManager


class Scheduler:
    sched = BackgroundScheduler()

    def __init__(self, room_name_list):  # 추가할 룸 이름
        self.sched.start()
        self.chat_bot = KakaoTalkChatBot()
        self.msg_manager = MsgManager()  # 메세지 매니저가 각 방마다 있어야함
        for room_name in room_name_list:
            self.sched.add_job(self.queue_manage, trigger='cron', args=('handle_msg', room_name), second='*/1', id=room_name)
            self.chat_bot.open_chat_room(room_name)  # 채팅방을 열어줌
            msg = self.chat_bot.get_msg(room_name)
            res = self.msg_manager.msg_split(msg)
            res = self.msg_manager.read_new_msg(res)  # 시작시 로드되는 채팅들은 무시함

        # self.sched.add_job(self.job2, 'cron', hour='19', minute='30', id='test2')  # 매 xx:xx에 실행
        self.q = Queue()
        r = Thread(target=self.run)
        r.daemon = True # 메인스레드가 끝날때까지 돌아감
        r.start()

    def run(self):
        """ 순차적으로 큐에 쌓인 일을 한다 """
        while True:
            if not self.q.empty():
                t = self.q.get()
                t.start()
                t.join()

    def queue_manage(self, func, *args):
        t = None
        if func == 'handle_msg':
            t = Thread(target=self.handle_msg, args=args)

        if t:
            self.q.put(t)

    def handle_msg(self, room_name):
        """ 메세지를 처리하고 """
        #try:  # 클립보드 사용중이라면 순서를 미뤄도 ok
        msg = self.chat_bot.get_msg(room_name)
        # except:
        #     return
        if msg == 0:  # 창이 열려있지 않으면 킴
            try:
                self.chat_bot.open_chat_room(room_name)
            except:
                print(f'{room_name}은 존재하지 않는 방입니다. 방이름을 다시 확인해주세요. 스케줄을 제거합니다...')
                if self.sched.get_job(room_name):
                    self.sched.remove_job(room_name)
                return
            self.handle_msg(room_name)
        else:
            res = self.msg_manager.msg_split(msg)
            res = self.msg_manager.read_new_msg(res)
            for r in res:
                print(r)
                if r['메세지'][0] == '!':
                    self.execute(r, room_name)

    def execute(self, command, room_name):
        """ 명령을 수행한다 """
        msg = command['메세지'].strip().split(' ')
        c = msg[0]
        if c == '!인사':
            self.chat_bot.send_msg(f'인사오지게 박습니다 "{command["닉네임"]}"형님', room_name)
