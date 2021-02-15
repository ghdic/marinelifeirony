# 파이썬에선 스레드를 쓰더라도 성능향상x(인터프리터가 하나의 스레드만 수행할수 있게 GIL이 걸려있음)
# I/O 작업과 동시에 병렬된 작업을 할때 유용

# import time
# import threading
# from concurrent.futures import ThreadPoolExecutor, as_completed

# start = time.perf_counter()

# def do_something(second):
#     print(f'Sleeping {second} second...')
#     time.sleep(second)
#     print('Done Sleeping...')
#     return f'somnething is done {second}'


    

# # # case1) thread가 없는 경우 코드 그대로 흘러감
# # do_something(1)
# # do_something(1)

# # # # case2) thread를 이용해서 실행하는 경우, 스레드가 두개 생성되어 작업을함
# # THREAD_NUMBER = 2
# # threads = []
# # for _ in range(THREAD_NUMBER):
# #     t = threading.Thread(target=do_something, args=[_ + 1])
# #     t.start()
# #     threads.append(t)
# # for t in threads:
# #     t.join() # 작업이 끝날때까지 기다림, join안하면 메인스레드랑 따로놈 finish in 0second 나옴

# # # case3) ThreadPoolExecutor을 이용하는 경우
# # with ThreadPoolExecutor(max_workers=5) as executor: # max_works로 최대 스레드풀 정할수 있음 
# #     results = [executor.submit(do_something, 1) for _ in range(10)]
# #     for f in as_completed(results): # 완료된 return-value를 출력
# #         print(f.result())
# #     # secs = [5, 4, 3, 2, 1]
# #     # results = executor.map(do_something, secs)
# #     # for result in results:
# #     #     print(result)

# finish = time.perf_counter()
# print(f"Finish in {round(finish-start)} second")


import concurrent.futures
import logging
import queue
import random
import threading
import time

def producer(queue, event):
    """ 네트워크로부터 넘버를 받음 """
    while not event.is_set(): 
        message = random.randint(1, 101)
        logging.info("Producer got message: %s", message)
        queue.put(message)
    logging.info("Producer received event. Exiting")

def consumer(queue, event):
    """ 데이터베이스에 숫자를 저장함 """
    while not event.is_set() or not queue.empty():
        message = queue.get()
        logging.info("Consumer storing message: %s (size=%d)", message, queue.qsize())

    logging.info("Consumer received event. Exiting")

if __name__ == "__main__":
    format = "%(asctime)s : %(message)s"
    logging.basicConfig(format=format, level=logging.INFO, datefmt="%H:%M:%S")
    pipeline = queue.Queue(maxsize=10)
    event = threading.Event()

    with concurrent.futures.ThreadPoolExecutor(max_workers=2) as executor:
        executor.submit(producer, pipeline, event)
        executor.submit(consumer, pipeline, event)

        time.sleep(0.1)
        logging.info("Main: about to set event")
        event.set()