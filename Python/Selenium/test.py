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

options = webdriver.ChromeOptions()
#options.add_argument('headless')
options.add_experimental_option("debuggerAddress", "127.0.0.1:9222")
driver = webdriver.Chrome('chromedriver', options=options)

driver.get("https://nid.naver.com/nidlogin.login?mode=form&url=https%3A%2F%2Fwww.naver.com")
# id = driver.find_element_by_css_selector("#id")
# pw = driver.find_element_by_css_selector("#pw")
bt = driver.find_element_by_css_selector("#log\.login")
driver.execute_script("document.getElementById('id').setAttribute('value', 'ghdic')")
driver.execute_script("document.getElementById('pw').setAttribute('value', 'wkdwlsgh123!')")
# id.send_keys("ghdic")
# pw.send_keys("wkdwlsgh123!")
time.sleep(5)
bt.click()