from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.common.by import By
import time, random
import ctypes  # An included library with Python install.  
import winsound 


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
check = ['사이즈','대형(성인)     (품절)', '중형(학생)     (품절)', '소형(아동)     (품절)','소소형(유아)     (품절)']

driver.get("https://smartstore.naver.com/mfbshop/products/4072435942")

while True:
    driver.find_element_by_css_selector("#wrap > div > div.prd_detail_basic > div.info > form > fieldset > div:nth-child(5) > div.prd_type2 > ul > li > ul > li > div > div > div").click()
    waitSession("body > div:nth-child(2) > div > ul", 10)
    comboBox = driver.find_element_by_css_selector("body > div:nth-child(2) > div > ul")
    boxs = comboBox.find_elements_by_css_selector("li")
    for box in boxs:
        print(box.text)
        if not box.text in check:
            duration = 1000  # milliseconds
            freq = 440  # Hz
            winsound.Beep(freq, duration)
            ctypes.windll.user32.MessageBoxW(0, box.text, box.text, 1)
    time.sleep(2)
    driver.refresh()