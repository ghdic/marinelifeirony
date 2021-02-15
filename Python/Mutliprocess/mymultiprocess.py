import time
import multiprocessing
import concurrent

def do_something(second):
    print(f"Sleeping {second} seconds...")
    time.sleep(second)
    print("Done Sleeping...")

# with concurrent.futures.ProcessPoolExecutor() as executor:
#     f1 = executor.submit(do_something, 1)

if __name__ == "__main__": 
    start = time.perf_counter()

    processes = []
    for _ in range(10):
        p = multiprocessing.Process(target=do_something, args=[1])
        p.start()
        processes.append(p)

    # for process in processes:
    #     process.join()

    finish = time.perf_counter()
    print(f"Finished is {round(finish-start)} second")