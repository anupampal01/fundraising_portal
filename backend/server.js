const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const internRoutes = require("./routes/internRoutes");

dotenv.config();
connectDB();

const app = express();

// Enable CORS for local & deployed frontend
app.use(cors({
  origin: [
    "http://127.0.0.1:5500",
    "http://localhost:5500",
    "https://fundraising-frontend.netlify.app" // Replace with your deployed frontend
  ]
}));

app.use(express.json());

// Routes
app.use("/api", internRoutes);

// Test route
app.get("/", (req, res) => {
  res.json({ message: "Backend running! Use /api/intern or /api/leaderboard" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
