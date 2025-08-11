from db import SessionLocal, Company, init_db

companies_data = [
    {"symbol": "AAPL", "name": "Apple Inc."},
    {"symbol": "MSFT", "name": "Microsoft Corp."},
    {"symbol": "GOOGL", "name": "Alphabet Inc."},
    {"symbol": "AMZN", "name": "Amazon.com Inc."},
    {"symbol": "TSLA", "name": "Tesla Inc."},
    {"symbol": "META", "name": "Meta Platforms Inc."},
    {"symbol": "NFLX", "name": "Netflix Inc."},
    {"symbol": "NVDA", "name": "NVIDIA Corp."},
    {"symbol": "IBM", "name": "International Business Machines"},
    {"symbol": "ORCL", "name": "Oracle Corp."}
]

def seed():
    init_db()
    db = SessionLocal()
    for c in companies_data:
        exists = db.query(Company).filter(Company.symbol == c["symbol"]).first()
        if not exists:
            db.add(Company(symbol=c["symbol"], name=c["name"]))
    db.commit()
    db.close()

if __name__ == "__main__":
    seed()
    print("✅ Companies seeded successfully!")
