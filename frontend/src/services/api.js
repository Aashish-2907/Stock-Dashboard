import axios from "axios";

const API_BASE = "http://localhost:8000";

export const fetchCompanies = async () => {
  const res = await axios.get(`${API_BASE}/companies`);
  return res.data;
};

export const fetchStockData = async (symbol) => {
  const res = await axios.get(`${API_BASE}/stock/${symbol}`);
  return res.data;
};
