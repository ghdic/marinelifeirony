from selenium import webdriver

# 탭에 크롤링할 대상 리소스가 로드 될때까지 기다려준다
# from selenium.webdriver.support.ui import WebDriverWait
# from selenium.webdriver.support import expected_conditions as EC
# from selenium.common.exceptions import TimeoutException
# from selenium.webdriver.common.by import By

# def waitSession(val, tt):
#     try:
#         element = WebDriverWait(driver, tt).until(
#             EC.presence_of_element_located((By.CSS_SELECTOR, val))
#         )
#     except TimeoutException:
#         print("타임아웃")
#         raise Exception('타임아웃')


# options = webdriver.ChromeOptions()
# #options.add_argument('headless') # 백그라운드로 크롬을 키고 싶을때 옵션
# options.add_experimental_option("prefs", {
#     "download.default_directory": r"C:\Users\User\OneDrive\marinelifeirony\Python\Project\bojauto\images",
#     "download.prompt_for_download": False,
#     "download.directory_upgrade": True,
#     "safebrowsing.enabled": True
# }) # request.urlretrieve(download_url, savename)가 안먹힐 경우 해당 요소 click()하면 바로 다운 받게 하는 옵션
# options.add_experimental_option("debuggerAddress", "127.0.0.1:9222") # 원격으로 켜져 있는 크롬 탭을 잡는다. 사용자 데이터가 있는 브라우저를 잡을 수 있어서 캡챠우회에 유용
# browser.set_window_size(1920, 100000) # 강제로 브라우저 키워서 스크롤시 이미지 로드 되는 방식때 강제로드 시키는데 유용 headless 옵션이랑 debuggerAddress 옵션 같이 주면 좋음
# driver = webdriver.Chrome('chromedriver', options=options)

# import re
# def cleanText(readData):
#     # 텍스트에 포함되어 있는 특수 문자 제거
#     # 특수 문자 때문에 파일이나 시트 제목이 안될 경우 대비 유용
#     text = re.sub('[\/:*\?\"\\‘|\<\>`\']', ' ', readData)


# display: none으로 되어있는건 .text로 안긁어와진다. 실제 보여지는 컨텐츠만 긁어와짐, 이때 .get_attribute('textContent')를 사용해서 긁어 올 수 있음

# alert, confirm창 처리
try:
    confirm = driver.switch_to.alert
    confirm.accept()
except:
    pass


# 비밀번호 같은 중요한 정보는 소스코드가 아닌 환경변수에 담기
os.environ.get("my_pw")


# 윈도우 창 길이 무제한으로 늘리고 싶을 때 사용
options = webdriver.ChromeOptions()
options.add_argument('headless')
options.headless = True
options.add_experimental_option("debuggerAddress", "127.0.0.1:9222")
global driver
driver = webdriver.Chrome('chromedriver.exe', options=options)

driver.set_window_size(1920, 100000)
#     return text