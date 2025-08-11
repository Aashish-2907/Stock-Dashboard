import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

export default function StockChart({ stockData }) {
  if (!stockData) return <div className="stock-chart-container">Select a company to view its stock chart</div>;

  const labels = stockData.history.map((h) => h.date);
  const data = {
    labels,
    datasets: [
      {
        label: `${stockData.symbol} Closing Price`,
        data: stockData.history.map((h) => h.close),
        borderColor: "blue",
        fill: false
      }
    ]
  };

  return (
    <div className="select-message">
      <Line data={data} />
    </div>
  );
}
