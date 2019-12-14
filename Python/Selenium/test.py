import os
import time
import re
from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.common.by import By

def cleanText(readData):
    #텍스트에 포함되어 있는 특수 문자 제거
    text = re.sub('[\/:*\?\"\\‘|\<\>`\']', ' ', readData)
    return text

print("문제 url을 입력해주세요")
url = input()
options = webdriver.ChromeOptions()
options.add_argument('headless')
options.add_argument('window-size=1920x1080')
options.add_argument('disable-gpu')
driver = webdriver.Chrome('chromedriver', options=options)

driver.get(url)

# 로딩 창이 끝날때까지 기다린다.
# title원소를 찾으면 성공 10초가 지나면
try:
    element = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.CSS_SELECTOR, "div.css-v3d350"))
    )
except TimeoutException:
    print("타임아웃")
    time.sleep(1)
    exit(-1)