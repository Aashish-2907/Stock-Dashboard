import React from "react";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function StockChart({ stockData }) {
  if (!stockData) {
    return <div>Select a company to see its stock chart.</div>;
  }

  const labels = stockData.history.map(item => item.date);
  const closingPrices = stockData.history.map(item => item.close);

  const data = {
    labels,
    datasets: [
      {
        label: `${stockData.symbol} Closing Price`,
        data: closingPrices,
        fill: false,
        borderColor: "blue",
        tension: 0.2,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: { display: true, title: { display: true, text: "Date" } },
      y: { display: true, title: { display: true, text: "Price (USD)" } },
    },
  };

  return <Line data={data} options={options} />;
}
