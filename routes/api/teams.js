const express = require("express");
const router = express.Router();
const teamCtrl = require("../../controllers/teams");

router.get("/:divisionId", teamCtrl.index); // Get teams by division
router.post("/", teamCtrl.createTeam); // Create a new team

module.exports = router;
