from apscheduler.schedulers.background import BackgroundScheduler
import time
from queue import Queue
from threading import Thread
#from kakaotalkchatbot import KakaoTalkChatBot


class Scheduler:
    sched = BackgroundScheduler()

    def __init__(self):
        self.sched.start()
        # https://apscheduler.readthedocs.io/en/3.0/modules/triggers/cron.html#module-apscheduler.triggers.cron
        self.sched.add_job(self.job, 'cron', second='*/5', id='test')  # 매 5초마다 실행
        self.sched.add_job(self.job2, 'cron', hour='19', minute='30', id='test2')  # 매 xx:xx에 실행
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

    def job(self):
        print("job1")


    def job2(self):
        print("job2!!")


schd = Scheduler()

while True:
    time.sleep(10)
    print('1')
