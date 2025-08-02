const express = require("express");
const { getInternData, getLeaderboard, addIntern } = require("../controllers/internController");

const router = express.Router();

router.get("/intern", getInternData);
router.get("/leaderboard", getLeaderboard);
router.post("/intern", addIntern);

module.exports = router;
