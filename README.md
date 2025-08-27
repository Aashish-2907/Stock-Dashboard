# 📈 Stock Dashboard

A full-stack stock dashboard application that fetches and visualizes real-time or historical company stock data.

## 🚀 Features
- Frontend built with **React.js** (Vercel deployment)
- Backend built with **Node.js + Express** (Render deployment)
- Data fetching via **Axios**
- Responsive and interactive charts
- Company search and stock details view

## 🛠️ Tech Stack
**Frontend:**
- React.js
- Axios
- Chart.js / Recharts (depending on your setup)
- Deployed on **Vercel**

**Backend:**
- Node.js + Express
- CORS enabled
- REST API for frontend requests
- Deployed on **Render**

## 📂 Project Structure
.
├── backend/ # Express.js API
│ ├── package.json
│ ├── server.js
│ └── ...
├── frontend/ # React.js app
│ ├── package.json
│ ├── src/
│ └── public/
└── README.md

---

## ⚙️ Local Development

### 1️⃣ Clone the repo

git clone https://github.com/Aashish-2907/Stock-Dashboard
cd stock-dashboard
2️⃣ Backend Setup

cd backend
npm install
npm start
Runs backend on http://localhost:9000

3️⃣ Frontend Setup

cd ../frontend
npm install
npm start
Runs frontend on http://localhost:3000

🌐 Deployment
Frontend (Vercel):

Push changes to main branch → Vercel auto-deploys

Backend (Render):

Deploy Express server as a web service

Set PORT environment variable on Render

🔧 Environment Variables
Backend:

PORT=9000
API_KEY=your_api_key_here
Frontend:


REACT_APP_API_BASE_URL=https://your-backend-url.onrender.com
📸 Screenshots


📜 License
This project is licensed under the MIT License.

