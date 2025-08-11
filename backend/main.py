from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import yfinance as yf
import pandas as pd

app = FastAPI(title="Stock Market Dashboard API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # adjust for production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/companies")
def get_companies():
    return [
  {"symbol": "AAPL", "name": "Apple Inc."},
  {"symbol": "MSFT", "name": "Microsoft Corporation"},
  {"symbol": "GOOGL", "name": "Alphabet Inc."},
  {"symbol": "AMZN", "name": "Amazon.com, Inc."},
  {"symbol": "META", "name": "Meta Platforms, Inc."},
  {"symbol": "TSLA", "name": "Tesla, Inc."},
  {"symbol": "NFLX", "name": "Netflix, Inc."},
  {"symbol": "NVDA", "name": "NVIDIA Corporation"},
  {"symbol": "INTC", "name": "Intel Corporation"},
  {"symbol": "CSCO", "name": "Cisco Systems, Inc."},
  {"symbol": "ADBE", "name": "Adobe Inc."},
  {"symbol": "PYPL", "name": "PayPal Holdings, Inc."},
  {"symbol": "ORCL", "name": "Oracle Corporation"},
  {"symbol": "CRM", "name": "Salesforce, Inc."},
  {"symbol": "IBM", "name": "International Business Machines Corporation"},
  {"symbol": "UBER", "name": "Uber Technologies, Inc."},
  {"symbol": "TWTR", "name": "Twitter, Inc."},
  {"symbol": "SQ", "name": "Block, Inc."},
  {"symbol": "BABA", "name": "Alibaba Group Holding Limited"},
  {"symbol": "DIS", "name": "The Walt Disney Company"}
]


@app.get("/stock/{symbol}")
def get_stock_data(symbol: str):
    try:
        data = yf.download(symbol, period="6mo", interval="1d", auto_adjust=True)

        if data.empty:
            raise HTTPException(status_code=404, detail="No stock data found")

        # Flatten MultiIndex columns: keep only first level ('Close', 'Open', etc.)
        if isinstance(data.columns, pd.MultiIndex):
            data.columns = data.columns.get_level_values(0)

        data.reset_index(inplace=True)

        expected_cols = {"Date", "Open", "High", "Low", "Close", "Volume"}
        actual_cols = set(data.columns)

        missing_cols = expected_cols - actual_cols
        if missing_cols:
            raise HTTPException(status_code=500, detail=f"Incomplete stock data received: missing {missing_cols}")

        return {
            "symbol": symbol,
            "history": [
                {
                    "date": row["Date"].strftime("%Y-%m-%d"),
                    "open": round(row["Open"], 2),
                    "high": round(row["High"], 2),
                    "low": round(row["Low"], 2),
                    "close": round(row["Close"], 2),
                    "volume": int(row["Volume"]),
                }
                for _, row in data.iterrows()
            ],
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))