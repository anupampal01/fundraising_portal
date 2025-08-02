const Intern = require("../models/Intern");

// Get single intern (for dashboard)
const getInternData = async (req, res) => {
  try {
    const intern = await Intern.findOne(); // returns first intern for demo
    if (!intern) {
      return res.status(404).json({ message: "No intern data found" });
    }
    res.json(intern);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get leaderboard (top donors)
const getLeaderboard = async (req, res) => {
  try {
    const leaderboard = await Intern.find().sort({ totalDonations: -1 }).limit(10);
    res.json(leaderboard);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add intern(s) — supports both single and bulk insert
const addIntern = async (req, res) => {
  try {
    // If req.body is an array → bulk insert
    if (Array.isArray(req.body)) {
      // Validate at least one object exists
      if (req.body.length === 0) {
        return res.status(400).json({ message: "Empty array provided" });
      }

      const interns = await Intern.insertMany(req.body);
      return res.status(201).json({
        message: `${interns.length} interns added successfully`,
        data: interns
      });
    }

    // Else → single insert
    const { name, email, referralCode, totalDonations, rewards } = req.body;

    // Basic validation
    if (!name || !email || !referralCode) {
      return res.status(400).json({ message: "Name, email, and referralCode are required" });
    }

    const intern = new Intern({
      name,
      email,
      referralCode,
      totalDonations,
      rewards
    });

    await intern.save();
    res.status(201).json({ message: "Intern added successfully", data: intern });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getInternData, getLeaderboard, addIntern };
