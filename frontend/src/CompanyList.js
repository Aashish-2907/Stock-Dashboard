import React from "react";

export default function CompanyList({ companies, onSelect, selectedSymbol }) {
  return (
    <div className="company-list" >
      <h2 style={{ textAlign: "center" }}>Companies</h2>
      {companies.map(company => (
        <div className="company-item"
          key={company.symbol}
          onClick={() => onSelect(company.symbol)}
          style={{
            padding: "10px 15px",
            cursor: "pointer",
            backgroundColor: company.symbol === selectedSymbol ? "#d0ebff" : "white",
            borderBottom: "1px solid #eee"
          }}
        >
          {company.name}
        </div>
      ))}
    </div>
  );
}
