Fundraising Portal
A basic full-stack fundraising dashboard

👨‍💻 Developer
Anupam Pal ✨🚀

Features
Frontend (HTML/CSS/JS):

Dummy login/signup page

Dashboard showing intern name, referral code, total donations, and rewards

Leaderboard for top donors (bonus)

Backend (Node.js + Express + MongoDB):

REST API to serve dummy intern data

Supports single and bulk intern creation

Leaderboard endpoint for top donations

Tech Stack
Frontend: HTML, CSS, JavaScript

Backend: Node.js, Express.js

Database: MongoDB (Mongoose)

API Endpoints
GET /api/intern → Get single intern data

GET /api/intern/leaderboard → Get top donors

POST /api/intern → Add single or multiple interns

# Clone repo
git clone https://github.com/anupampal01/fundraising_portal.git
cd fundraising_portal/backend

# Install dependencies
npm install



# Start server
node server.js/npm start