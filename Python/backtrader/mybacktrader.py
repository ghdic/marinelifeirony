import backtrader as bt
import pandas as pd
import matplotlib.pyplot as plt


class MyStrategy(bt.Strategy):
    def log(self, txt, dt=None):
        dt = dt or self.datas[0].datetime.date(0)
        print('%s, %s' % (dt.isoformat(), txt))

    def __init__(self):
        self.dataclose = self.datas[0].close
        self.order = None
        self.buyprice = None
        self.buycomm = None

        self.sma = bt.indicators.MovingAverageSimple(self.datas[0], period=15)
        self.rsi = bt.indicators.RelativeStrengthIndex()

    def notify_order(self, order):
        if order.status in [order.Submitted, order.Accepted]:
            return
        if order.status in [order.Completed]:
            if order.isbuy():
                self.log('BUY EXECUTED, Price: %.2f, Cost: %.2f, Comm %.2f' % (order.executed.price,
                                                                               order.executed.value,
                                                                               order.executed.comm))
                self.buyprice = order.executed.price
                self.buycomm = order.executed.comm
            else:
                self.log('SELL EXECUTED, Price : %.2f, Cose: %.2f, Comm, %.2f' % (order.executed.price,
                                                                                  order.executed.value,
                                                                                  order.executed.comm))
            self.bar_executed = len(self)
        elif order.status in [order.Canceled, order.Margin, order.Rejected]:
            self.log('Order Canceled/ Margin/Rejected')

        self.order = None

    def notify_trade(self, trade):

        if not trade.isclosed:
            return

        self.log('OPERATION PROFIT, GROSS %.2f, NET %.2f' % (trade.pnl, trade.pnlcomm))

    def next(self):
        #         self.log('Close, %.2f' % self.dataclose[0])
        #         print('rsi:',self.rsi[0])

        if self.order:
            return

        if not self.position:
            if (self.rsi[0] < 30):
                self.log('BUY CREATE, %.2f' % self.dataclose[0])
                self.order = self.buy(size=500)

        else:
            if (self.rsi[0] > 70):
                self.log('SELL CREATE, %.2f' % self.dataclose[0])
                self.order = self.sell(size=500)


if __name__ == '__main__':
    df = pd.read_csv('./QQQ.csv', index_col='DATE', parse_dates=['DATE'])
    ticker = 'QQQ'
    # 이 부분에서 어떻게 Backtrader에서 사용하는 DataFrame으로 변경되는지 궁금하다.
    data = bt.feeds.PandasData(dataname=df)

    cerebro = bt.Cerebro()
    cerebro.addstrategy(MyStrategy)
    cerebro.broker.setcommission(commission=0.001)
    cerebro.adddata(data, name=ticker)
    cerebro.broker.setcash(100000.0)

    print('Starting Portfolio Value: %.2f' % (cerebro.broker.getvalue()))
    cerebro.run()
    print('Final Portfolio Value : %.2f' % (cerebro.broker.getvalue()))
    cerebro.plot(volume=False, savefig=True, path='./backtrader-plot2.png')