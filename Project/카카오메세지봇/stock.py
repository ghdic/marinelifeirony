import yfinance as yf
import iexfinance

class Stock:
    def get_percent(self, price1, price2):
        return round((price1 / price2 - 1) * 100, 2)

    def get_info(self, ticker):
        text = ''
        target = yf.Ticker(ticker)
        data = target.get_info()
        company_name = data['longName']
        market_cap = self.num_to_unit(data['marketCap'])
        today_price = round(target.history(period='1d')['Close'][-1], 3)
        change_price = target.history(period='2d')['Close']
        change_percent = self.get_percent(change_price[-1], change_price[0])
        change_price = round(change_price[-1] - change_price[0], 3)
        week_price = target.history(period='1w', interval='1d')['Close']
        week_percent = self.get_percent(week_price[-1], week_price[0])
        month_price = target.history(period='1mo', interval='1d')['Close']
        month_percent = self.get_percent(month_price[-1], month_price[0])
        three_month_price = target.history(period='3mo', interval='3mo')['Close']
        three_month_percent = self.get_percent(three_month_price[-1], three_month_price[0])
        six_month_price = target.history(period='6mo', interval='3mo')['Close']
        six_month_percent = self.get_percent(six_month_price[-1], six_month_price[0])
        year_price = target.history(period='1y', interval='3mo')['Close']
        year_percent = self.get_percent(year_price[-1], year_price[0])
        ytd_price = target.history(period='ytd')['Close']
        ytd_percent = self.get_percent(ytd_price[-1], ytd_price[0])

        text += f'{company_name} ({ticker})\n'
        text += f'Cap : {market_cap}\n'
        text += f'Price : ${today_price}\n'
        text += f'Change : ${change_price} ({change_percent}%)\n'
        text += f'1W : {week_percent}%, 1M : {month_percent}%\n'
        text += f'3M : {three_month_percent}%, 6M : {six_month_percent}%\n'
        text += f'1Y : {year_percent}%, YTD : {ytd_percent}%'
        return text

    def history(self, ticker, period='7d'):
        period = period.replace('m', 'mo') # 예외 처리
        target = yf.Ticker(ticker)
        history = target.history(period=period, interval='1d')
        history = history.reset_index()
        return history[['Date', 'Open', 'Close']].to_string(index=False)

    def ticker_exist(self, ticker):
        try:
            target = yf.Ticker(ticker)
            target.get_info()
        except:
            return False
        return True

    def num_to_unit(self, num):
        unit = {0: '', 1: 'K', 2: 'M', 3: 'B', 4: 'T'}
        index = 0
        for i in range(4):
            if num >= 1000:
                num /= 1000
            else:
                break
            index += 1
        return f'{round(num, 2)}{unit[index]}'



# s = Stock()
# ticker = 'SNDL'
#
# if s.ticker_exist(ticker):
#     print(s.get_info(ticker))

# a = [1, 1, 2, 1, 3, 1]
# index = -1
# while True:
#     try:
#         index = a.index(1, index+1)
#         print(index)
#     except:
#         break