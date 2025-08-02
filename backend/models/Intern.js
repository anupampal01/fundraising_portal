const mongoose = require("mongoose");

const internSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true }, // Added email
  referralCode: { type: String, required: true },
  totalDonations: { type: Number, default: 0 },
  rewards: { type: [String], default: [] }
});

module.exports = mongoose.model("Intern", internSchema);
