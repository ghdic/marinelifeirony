from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.common.by import By
import time, random

def waitSession(val, tt):
    try:
        element = WebDriverWait(driver, tt).until(
            EC.presence_of_element_located((By.CSS_SELECTOR, val))
        )
    except TimeoutException:
        print("타임아웃")
        raise Exception('타임아웃')

options = webdriver.ChromeOptions()
#options.add_argument('headless')
options.add_experimental_option("debuggerAddress", "127.0.0.1:9222")
driver = webdriver.Chrome('chromedriver', options=options)

cnt = 60

while True:
    rd = random.randint(5, 20)
    print(cnt)
    driver.get("https://ghdic.github.io/")
    time.sleep(60 + cnt/3 - rd)
    driver.get("https://www.acmicpc.net/submit/10944/16982603")
    try:
        waitSession("#submit_button", 100)
    except:
        if driver.find_element_by_css_selector("div.alert-body"):
            continue
    time.sleep(rd)
    driver.find_element_by_css_selector("#submit_button").click()
    try:
        waitSession("td.result", 100)
    except:
        if driver.find_element_by_css_selector("div.alert-body"):
            continue
    cnt += 1
    if cnt // 10 == 0:
        driver.get("https://www.naver.com/")
        time.sleep(40 + cnt/3 - rd)
        driver.get("https://www.acmicpc.net/submit/1000/6526871")
        try:
            waitSession("#submit_button", 100)
        except:
            if driver.find_element_by_css_selector("div.alert-body"):
                continue
        time.sleep(rd)
        driver.find_element_by_css_selector("#submit_button").click()
        try:
            waitSession("td.result", 100)
        except:
            continue
        time.sleep(rd)