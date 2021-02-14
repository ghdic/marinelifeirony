import requests
from bs4 import BeautifulSoup


def get_weather():
    """ 기상청에서 날씨를 져옴 """
    headers = {'User-Agent':'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 '
                            '(KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36'}

    url = 'http://www.weather.go.kr/weather/forecast/mid-term-rss3.jsp?stnId=108'
    res = requests.get(url, headers=headers)
    soup = BeautifulSoup(res.content, 'lxml')
    res = ''

    res += soup.find('pubdate').string + "\n"
    location = soup.find('location')
    res += "장소 :" + location.find('city').string + "\n"
    days = location.find_all('data')[:7]

    for day in days:
        res += day.find('tmef').string + day.find('wf').string + "최저 온도 :" + day.find('tmn').string + "최대 온도 :" + day.find('tmx').string + "\n"
    return res