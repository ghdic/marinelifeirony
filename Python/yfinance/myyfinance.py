# 비공식 모듈 특수 기능 x, rapidAPI나 alpha vantage 같은거 쓰는게 더 나을수도 but 돈을 내야함
# 야후 finance 페이지를 스크랩해서 데이터를 가져와서 structure가 바뀌면.. 업뎃없을시 GG
import yfinance as yf

# 1. yf.Tickers
target = yf.Ticker("aapl")
print(target.info)
# action dataframe 반환 (dividends, splits)
# print(target.actions)

# print(target.dividends)

# print(target.splits)

# data period 정하기 “1d”, “5d”, “1mo”, “3mo”, “6mo”, “1y”, “2y”, “5y”, “10y”, “ytd”, “max”
# data interval 정하기 1m, 2m, 5m, 15m, 30m, 60m, 90m, 1h, 1d, 5d, 1wk, 1mo, 3mo
# start, end -> datetime

#print(target.history(start="2020-06-02", end="2020-06-07", interval="1d"))
#print(target.info) # 딕셔너리 형태로 던져줌
# 2. yf.download 한번에 여러 종목 가져올때
# data = yf.download("AMZN AAPL GOOG", start="2017-01-01", end="2017-04-30")
# print(data)
# data = yf.download("AMZN AAPL GOOG", start="2017-01-01",
#                     end="2017-04-30", group_by='tickers', threads=True)
# print(data) # 티커 기준
# 3. yf.pandas_datareader

# 판다스로 데이터 프레임 다룰 수 있음
# import pandas as pd

# tickers_list = ["aapl", "goog", "amzn", "BAC", "BA"] # example list
# tickers_data= {} # empty dictionary
# for ticker in tickers_list:
#     ticker_object = yf.Ticker(ticker)

#     #convert info() output from dictionary to dataframe
#     temp = pd.DataFrame.from_dict(ticker_object.info, orient="index")
#     temp.reset_index(inplace=True)
#     temp.columns = ["Attribute", "Recent"]
    
#     # add (ticker, dataframe) to main dictionary
#     tickers_data[ticker] = temp

# print(tickers_data)

# combined_data = pd.concat(tickers_data)
# combined_data = combined_data.reset_index()
# print(combined_data)

# del combined_data["level_1"] # clean up unnecessary column
# combined_data.columns = ["Ticker", "Attribute", "Recent"] # update column names

# print(combined_data)