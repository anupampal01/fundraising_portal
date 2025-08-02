// Auto-detect environment: local or deployed
const API_URL = (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1")
  ? "http://localhost:5000/api"
  : "https://fundraising-portal-qek3.onrender.com/api"; // Replace with deployed backend URL

// Fetch single intern data
async function fetchInternData() {
  try {
    const res = await fetch(`${API_URL}/intern`);
    if (!res.ok) throw new Error(`Failed: ${res.status}`);
    const data = await res.json();

    // Populate dashboard fields
    document.getElementById("internName").innerText = localStorage.getItem("internName") || data.name;
    document.getElementById("internEmail").innerText = localStorage.getItem("internEmail") || data.email;
    document.getElementById("referralCode").innerText = data.referralCode;
    document.getElementById("totalDonations").innerText = data.totalDonations;

    const rewardsList = document.getElementById("rewardsList");
    rewardsList.innerHTML = "";
    data.rewards.forEach(reward => {
      const li = document.createElement("li");
      li.textContent = reward;
      rewardsList.appendChild(li);
    });
  } catch (err) {
    console.error("Error fetching intern data:", err);
  }
}

// Fetch leaderboard data
async function fetchLeaderboard(limit = 10) {
  try {
    const res = await fetch(`${API_URL}/leaderboard`);
    if (!res.ok) throw new Error(`Failed: ${res.status}`);
    const leaderboard = await res.json();

    const list = document.getElementById("leaderboard");
    list.innerHTML = "";
    leaderboard.slice(0, limit).forEach(user => {
      const li = document.createElement("li");
      li.textContent = `${user.name} - ₹${user.totalDonations}`;
      list.appendChild(li);
    });
  } catch (err) {
    console.error("Error fetching leaderboard:", err);
  }
}

// Auto-call on dashboard page
if (window.location.pathname.endsWith("dashboard.html")) {
  fetchInternData();
  fetchLeaderboard(5); // Top 5 for dashboard
}
