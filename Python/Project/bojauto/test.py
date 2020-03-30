from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.common.by import By
from urllib import request
import os

def waitSession(val, tt):
    try:
        element = WebDriverWait(driver, tt).until(
            EC.presence_of_element_located((By.CSS_SELECTOR, val))
        )
    except TimeoutException:
        print("타임아웃")
        raise Exception('타임아웃')


st = int(input("시작페이지 입력 >"))

options = webdriver.ChromeOptions()
options.add_experimental_option("prefs", {
    "download.default_directory": r"C:\Users\User\OneDrive\marinelifeirony\Python\Project\bojauto\images",
    "download.prompt_for_download": False,
    "download.directory_upgrade": True,
    "safebrowsing.enabled": True
})
driver = webdriver.Chrome('chromedriver', options=options)

folder = "images/"
if not os.path.exists(folder):
    os.makedirs(folder)

# 1~ 85 페이지 url로 접근
for i in range(st, 86):
    try:
        page_url = "http://avangs.info/index.php?mid=resource_200x&category=1126403&listStyle=list&page=" + str(i)
        driver.get(page_url)
        waitSession("#bd_237788_0 > div.bd_lst_wrp > table > tbody", 100)
        board = driver.find_element_by_css_selector("#bd_237788_0 > div.bd_lst_wrp > table > tbody")
        posts = board.find_elements_by_css_selector("tr")
        url_list = []
    except:
        print("에러 정지 " + page_url)
        exit()
    # 해당 페이지에 게시판에 공지 제외 url를 긁어옴
    for post in posts:
        if "notice" in post.get_attribute("class"):
            continue
        url_list.append(post.find_element_by_css_selector("td.title > a").get_attribute("href"))
    #print(url_list)
    
    # 얻은 url을 기반으로 첨부파일 가져옴
    for url in url_list:
        try:
            driver.get(url)
            waitSession("#content  table.bd_tb", 100)
            contents = driver.find_element_by_css_selector("#content  table.bd_tb")
            contents = contents.find_elements_by_css_selector("tbody > tr > td > ul > li > a")
            for content in contents:
                content.click()
                #savename = folder+content.text
                #download_url = content.get_attribute("href")
                #request.urlretrieve(download_url, savename)
                #print(download_url)
        except:
            print("에러 정지 " + page_url)
            exit()
        