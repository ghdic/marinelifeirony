import yfinance as yf
import pandas as pd
from openpyxl import Workbook


target = yf.Ticker("^IXIC")

history = target.history(start="1971-05-01", end="2020-09-08", interval="1d")
# with pd.option_context('display.max_rows', None, 'display.max_columns', None):
#     print(history.High.pct_change())

history.to_csv("history.csv", index=False)
history.High.pct_change().to_csv("percent.csv", index=False)