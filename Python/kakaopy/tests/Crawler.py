from selenium import webdriver
from selenium.common.exceptions import NoSuchElementException
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException, ElementNotInteractableException
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import os
import time


class Crawler:

    def __init__(self):
        options = webdriver.ChromeOptions()
        prefs = {
            "translate_whitelists": {"en": "ko"},
            "translate": {"enabled": "true"}
        }
        options.add_experimental_option('prefs', prefs)
        options.add_argument('headless')  # 애 쓰면 번역이 안되네...
        self.driver = webdriver.Chrome('../chromedriver.exe', options=options)
        self.driver.set_window_size(1920, 10000)
        self.profile_url = 'https://money.cnn.com/quote/profile/profile.html?symb='
        self.news_url = 'https://money.cnn.com/quote/news/news.html?symb='
        self.chart_url = 'https://money.cnn.com/quote/chart/chart.html?symb='
        self.forecast_url = 'https://money.cnn.com/quote/forecast/forecast.html?symb='
        self.financial_url = 'https://money.cnn.com/quote/financials/financials.html?symb='
        self.shareholder_url = 'https://money.cnn.com/quote/shareholders/shareholders.html?symb='
        self.stockrank_url = 'https://unbiastock.com/'

    def waitSession(self, val, second):
        try:
            element = WebDriverWait(self.driver, second).until(
                EC.presence_of_element_located((By.CSS_SELECTOR, val))
            )
        except TimeoutException:
            print("타임아웃")
            raise Exception('타임아웃')

    def scoll_down(self):
        SCROLL_PAUSE_TIME = 0.5

        # Get scroll height
        last_height = self.driver.execute_script("return document.body.scrollHeight")

        while True:
            # Scroll down to bottom
            self.driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")

            # Wait to load page
            time.sleep(SCROLL_PAUSE_TIME)

            # Calculate new scroll height and compare with last scroll height
            new_height = self.driver.execute_script("return document.body.scrollHeight")
            if new_height == last_height:
                break
            last_height = new_height

    def remove_element(self, element):
        self.driver.execute_script("""
        arguments[0].remove()
        """, element)

    def profile_save_as_png(self, ticker):
        self.driver.get(self.profile_url + ticker)
        self.remove_element(self.driver.find_element_by_css_selector('#cnnHeader > div > header'))  # 헤더 지움
        element = self.driver.find_element_by_css_selector('#cnnBody > div.cnnBody_Left.wsodContent')
        self.scoll_down()
        path = 'image/' + ticker
        if not os.path.exists(path):
            os.makedirs(path)
        element.screenshot(path + '/' + ticker + '_profile.png')  # get_image_topside 140  crop_iamge_topside 180

    def get_news(self, ticker):
        self.driver.get(self.news_url + ticker)
        tbody = self.driver.find_element_by_css_selector('#wsod_newsAndPressReleaseContainer > div > table > tbody')
        tds = tbody.find_elements_by_css_selector('td')
        text = ''
        for td in tds:
            try:
                url = td.find_element_by_css_selector('a').get_attribute('href')
            except NoSuchElementException:
                continue
            text += td.text + '\n' + url + '\n'

        return text

    def add_trend(self, target):
        technical = self.driver.find_element_by_css_selector('#indicators')
        technical.click()
        trend = self.driver.find_element_by_css_selector('#menuFlyout_indicators > li:nth-child(2) > a')
        trend.click()
        time.sleep(0.3)
        index = self.driver.find_element_by_css_selector(target)
        index.click()
        try:
            index.send_keys(Keys.ENTER)
        except ElementNotInteractableException:  # 안눌렸을 경우 엔터로 해결
            pass

    def add_momentum(self, target):
        technical = self.driver.find_element_by_css_selector('#indicators')
        technical.click()
        momentum = self.driver.find_element_by_css_selector('#menuFlyout_indicators > li:nth-child(1) > a')
        momentum.click()
        index = self.driver.find_element_by_css_selector(target)
        index.click()
        try:
            index.send_keys(Keys.ENTER)
        except ElementNotInteractableException:
            pass



    def chart_save_as_png(self, ticker, term='1y'):
        """ 차트 to png"""
        abbreviation = {'1d': '1 day', '5d': '5 day', '10d': '10 Day', '1m': '1 Month', '3m': '3 Months',
                        '6m': '6 Months', 'ytd': 'YTD', '1y': '1 Year', '3y': '3 Year', '10y': '10 Year'}
        term = abbreviation[term]

        self.driver.get(self.chart_url + ticker)
        # frame = self.driver.find_element_by_css_selector('#cnnBody > div.cnnBody_Left.wsodContent > div.mod-quoteinfo > iframe')
        # self.driver.switch_to.frame(frame)
        #
        # days = self.driver.find_element_by_css_selector('#durationHolder')
        # days = days.find_elements_by_css_selector('li > a')
        #
        # for day in days:
        #     if day.text == term:  # 원하는 term에 차트를 업데이트
        #         day.click()
        #         break
        #
        #
        # while True:
        #     try:
        #         self.add_trend('#subMenuFlyout_indicators_1 > li:nth-child(6) > a')  # simple ma
        #         time.sleep(0.5)
        #     except:
        #         continue
        #     break
        # while True:
        #     try:
        #         self.add_trend('#subMenuFlyout_indicators_1 > li:nth-child(2) > a')  # ema
        #         time.sleep(0.5)
        #     except:
        #         continue
        #     break
        #
        # while True:
        #     try:
        #         self.add_momentum('#subMenuFlyout_indicators_0 > li:nth-child(5) > a')  # rsi
        #         time.sleep(0.5)
        #     except:
        #         continue
        #     break
        # chart = self.driver.find_element_by_css_selector('#wsod_interactiveChart')

        chart = self.driver.find_element_by_css_selector('#cnnBody > div.cnnBody_Left.wsodContent')
        path = 'image/'
        # if not os.path.exists(path):
        #     os.makedirs(path)
        chart.screenshot(path + '/' + f'{ticker}_chart.png')

    def forecast_as_png(self, ticker):
        self.driver.get(self.forecast_url + ticker)
        chart = self.driver.find_element_by_css_selector('#cnnBody > div.cnnBody_Left.wsodContent')
        path = 'image/'
        # if not os.path.exists(path):
        #     os.makedirs(path)
        chart.screenshot(path + '/' + f'{ticker}_forecast.png')




c = Crawler()
print(c.chart_save_as_png('huya'))
