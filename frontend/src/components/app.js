import React, { useEffect, useState } from "react";
import { fetchCompanies, fetchStockData } from "./services/api";
import CompanyList from "./components/CompanyList";
import StockChart from "./components/StockChart";
import "./styles.css";

export default function App() {
  const [companies, setCompanies] = useState([]);
  const [stockData, setStockData] = useState(null);

  useEffect(() => {
    fetchCompanies().then(setCompanies);
  }, []);

  const handleSelect = (symbol) => {
    fetchStockData(symbol).then(setStockData);
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "250px" }}>
        <CompanyList companies={companies} onSelect={handleSelect} />
      </div>
      <div style={{ flex: 1 }}>
        <StockChart stockData={stockData} />
      </div>
    </div>
  );
}
