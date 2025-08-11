import React from "react";

export default function CompanyList({ companies, onSelect }) {
  return (
    <div style={{ overflowY: "scroll", height: "100vh", padding: "10px", borderRight: "1px solid #ddd" }}>
      {companies.map((c) => (
        <div
          key={c.symbol}
          style={{ padding: "8px", cursor: "pointer", borderBottom: "1px solid #eee" }}
          onClick={() => onSelect(c.symbol)}
        >
          {c.name}
        </div>
      ))}
    </div>
  );
}
