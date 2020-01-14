from flask import Flask, render_template
import json
import plotly
import pandas as pd
import numpy as np
from stock import get_stocks, get_url, get_data, get_stochastic, get_plot

app = Flask(__name__)
app.debug = True


@app.route('/')
def index():
    stocks = get_stocks()
    item_name = '신라젠'
    url = get_url(item_name, stocks)
    df = get_data(url)
    df = get_stochastic(df)
    graphs = get_plot(df)
    graphJSON = json.dumps(graphs, cls=plotly.utils.PlotlyJSONEncoder)

    return render_template('layouts/index.html',
                           graphJSON=graphJSON)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=9999)