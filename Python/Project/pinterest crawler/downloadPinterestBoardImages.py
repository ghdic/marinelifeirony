# 사용법
# pinterest 로그인한 remote debugger chrome.exe & User Data 랑 chromedriver.exe 준비
# link부분만 바꿔주고 실행
# localhost:9222 에서 이미지 로드가 다되었나 확인 혹은 크롬이 cpu를 더 이상 잡아 먹지 않는다면 이미지 로드가 끝난것
# 그럼 q버튼을 눌러서 이미지 다운로드를 실행해주자 끝!

# -*- coding: utf-8 -*-
import urllib.request
import re
import time
from selenium.webdriver.common.keys import Keys
from selenium import webdriver
import keyboard  # using module keyboard

def downloadPinterestImages():
    options = webdriver.ChromeOptions()
    options.add_argument('headless')
    options.add_experimental_option("debuggerAddress", "127.0.0.1:9222")
    browser = webdriver.Chrome('chromedriver.exe', options=options)
    browser.set_window_size(1920, 100000)
    print("start")
    link="https://www.pinterest.co.kr/krabel019347/masiro/"
    browser.get(link)
    print("link start")
    while True: # cpu가 더 이상 일 안하면 0% 되면 q 눌러줌! 이미지 로드 더이상 안하는거임
        if keyboard.is_pressed('q'):  # if key 'q' is pressed 
            print('You Pressed A Key!')
            break  # finishing the loop
    
    images = browser.find_elements_by_css_selector("img")
    print(len(images))
    for img in images:

        image_url = img.get_attribute("srcset").split(",")[-1].strip().split(" ")[0]
        #print(image_url)
        pattern = re.compile("https://i.pinimg.com/.*")
        if pattern.match(image_url):
            urllib.request.urlretrieve(image_url, "images/"+image_url.split("/")[-1])

downloadPinterestImages()
