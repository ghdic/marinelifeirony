# from selenium import webdriver
# from selenium.webdriver.chrome.service import Service
# from webdriver_manager.chrome import ChromeDriverManager
# from selenium.webdriver.common.by import By
# import json
#
# options = webdriver.ChromeOptions()
#
# options.add_argument('--headless')
# options.add_argument('--start-maximized')
# options.add_experimental_option("debuggerAddress", "127.0.0.1:9222")
#
# driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)
# driver.get("https://krksap.tistory.com/1730")
#
# # full page capture
# S = lambda X: driver.execute_script('return document.body.parentNode.scroll' + X)
# driver.set_window_size(S('Width'), S('Height'))
# print(driver.find_element(By.CSS_SELECTOR, '#content > div.inner > div.hgroup > div.category').text)
# driver.find_element(By.TAG_NAME, 'body').screenshot("screenshot.png")


from PIL import Image, ImageWin
import math
import os
import win32print
import win32ui

image = Image.open('screenshot.png')
print(image.size)

slice_unit = 1000

PHYSICALWIDTH = 110
PHYSICALHEIGHT = 111

# printers = win32print.EnumPrinters(2)
# print(printers)  # 사용할 프린터기 3번째 인자 이름 넣어주기

printer_name = win32print.GetDefaultPrinter()

hDC = win32ui.CreateDC()
hDC.CreatePrinterDC(printer_name)
printer_size = hDC.GetDeviceCaps(PHYSICALWIDTH), hDC.GetDeviceCaps(PHYSICALHEIGHT)

for i in range(math.ceil(image.size[1] / 1000)):
    crop_image = image.crop((0, slice_unit * i, image.size[0], slice_unit * (i + 1)))  # (left, up, right, down)
    if crop_image.size[0] < crop_image.size[1]:
        crop_image.rotate(90)
    crop_image.save(f'crop{i}.png')

    hDC.StartDoc(f'crop{i}.png')
    hDC.StartPage()

    dib = ImageWin.Dib(crop_image)
    dib.draw(hDC.GetHandleOutput(), (0,0, printer_size[0], printer_size[1]))

    hDC.EndPage()
    hDC.EndDoc()
    hDC.DeleteDC()

# ###############################################################
# ############### 프린트 예제 비추 ################################
# options = webdriver.ChromeOptions()
# options.headless = False
#
# options.add_argument("--kiosk-printing")
# options.add_argument("--kiosk")
#
# settings = {
#     "recentDestinations": [{
#         "id": "Save as PDF",
#         "origin": "local",
#         "account": "",
#     }],
#     "selectedDestinationId": "Save as PDF",
#     "version": 2,
#
# }
#
# prefs = {
#     'printing.print_preview_sticky_settings.appState': json.dumps(settings),
#     "savefile.default_directory": r"C:\Users\user\Downloads",
# }
# options.add_experimental_option('prefs', prefs)
#
# driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)
#
# driver.get("https://marinelifeirony.tistory.com/141")
#
# # This gets saved in my downloads folder
# driver.execute_script("window.print();")
# import time
# time.sleep(5)
