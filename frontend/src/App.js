import React, { useEffect, useState } from "react";
import axios from "axios";
import CompanyList from "./CompanyList";
import StockChart from "./StockChart";

export default function App() {
  const [companies, setCompanies] = useState([]);
  const [selectedSymbol, setSelectedSymbol] = useState(null);
  const [stockData, setStockData] = useState(null);

  useEffect(() => {
    // Fetch company list
    axios.get("http://127.0.0.1:9000/companies")
      .then(res => setCompanies(res.data))
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    if (!selectedSymbol) return;
    // Fetch stock data for selected company
    axios.get(`http://127.0.0.1:9000/stock/${selectedSymbol}`)
      .then(res => setStockData(res.data))
      .catch(err => {
        console.error(err);
        setStockData(null);
      });
  }, [selectedSymbol]);

  return (
    <div className="app-container" style={{ display: "flex", height: "100vh", fontFamily: "Arial, sans-serif" }}>
      <div style={{ width: 300, borderRight: "1px solid #ccc", overflowY: "auto" }}>
        <CompanyList companies={companies} onSelect={setSelectedSymbol} selectedSymbol={selectedSymbol} />
      </div>
      <div style={{ flex: 1, padding: 20 }}>
        <StockChart stockData={stockData} />
      </div>
    </div>
  );
}
