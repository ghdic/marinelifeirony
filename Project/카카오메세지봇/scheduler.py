from apscheduler.schedulers.background import BackgroundScheduler
import time

def job():
    p_time_ymd_hms = \
        f"{time.localtime().tm_year}-{time.localtime().tm_mon}-{time.localtime().tm_mday} / " \
        f"{time.localtime().tm_hour}:{time.localtime().tm_min}:{time.localtime().tm_sec}"

    print(p_time_ymd_hms)

sched = BackgroundScheduler()
sched.start()
# https://apscheduler.readthedocs.io/en/3.0/modules/triggers/cron.html#module-apscheduler.triggers.cron
sched.add_job(job, 'cron', second='*/5', id='test') # 매 5초마다 실행

@sched.scheduled_job('cron', hour='0', minute='21', id='test2') # 매 xx:xx에 실행
def job2():
    print("job2!!")

while True:
    time.sleep(10)
    print('1')
