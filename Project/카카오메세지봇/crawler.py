from selenium import webdriver
from selenium.common.exceptions import NoSuchElementException
import os


class Crawler:

    def __init__(self):
        options = webdriver.ChromeOptions()
        prefs = {
            "translate_whitelists": {"en": "ko"},
            "translate": {"enabled": "true"}
        }
        options.add_experimental_option('prefs', prefs)
        #options.add_argument('headless')  # 애 쓰면 번역이 안되네...
        self.driver = webdriver.Chrome(options=options)
        self.driver.set_window_size(1920, 100000)
        self.profile_url = 'https://money.cnn.com/quote/profile/profile.html?symb='
        self.news_url = 'https://money.cnn.com/quote/news/news.html?symb='
        self.forecast_url = 'https://money.cnn.com/quote/forecast/forecast.html?symb='
        self.financial_url = 'https://money.cnn.com/quote/financials/financials.html?symb='
        self.shareholder_url = 'https://money.cnn.com/quote/shareholders/shareholders.html?symb='
        self.stockrank_url = 'https://unbiastock.com/'

    def profile_save_as_png(self, ticker):
        self.driver.get(self.profile_url + ticker)
        element = self.driver.find_element_by_css_selector('#cnnBody > div.cnnBody_Left.wsodContent')
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


c = Crawler()
print(c.get_news('atos'))
c.driver.close()
