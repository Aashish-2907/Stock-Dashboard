# 📈 Stock Dashboard

A full-stack stock dashboard application that fetches and visualizes real-time or historical company stock data.

##🚀 Features

Frontend built with React.js (Vercel deployment)
Backend built with FastAPI (Render deployment)
Data fetching via Axios
Responsive and interactive charts
Company search and stock details view

## 🛠️ Tech Stack
**Frontend:**
- React.js
- Axios
- Chart.js / Recharts (depending on your setup)
- Deployed on **Vercel**

**Backend:**
Python + FastAPI
CORS enabled
REST API for frontend requests
Deployed on Render

## 📂 Project Structure
.
├── backend/             # FastAPI app
│   ├── requirements.txt
│   ├── main.py
│   └── ...
├── frontend/            # React.js app
│   ├── package.json
│   ├── src/
│   └── public/
└── README.md

---

## ⚙️ Local Development

### 1️⃣ Clone the repo

git clone https://github.com/Aashish-2907/Stock-Dashboard
cd stock-dashboard
2️⃣ Backend Setup

cd backend
pip install -r requirements.txt
uvicorn main:app --reload --port 9000

3️⃣ Frontend Setup

cd ../frontend
npm install
npm start

## 🌐 Deployment

Frontend (Vercel):
Push changes to main branch → Vercel auto-deploys

Backend (Render):
Deploy Express server as a web service

Set PORT environment variable on Render

## 🔧 Environment Variables

Backend:
PORT=9000
API_KEY=your_api_key_here

Frontend:
REACT_APP_API_BASE_URL=https://your-backend-url.onrender.com
📸 Screenshots


📜 License
This project is licensed under the MIT License.

