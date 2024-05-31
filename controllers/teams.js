const Team = require("../models/team");

module.exports = {
  index,
  createTeam,
};

async function index(req, res) {
  try {
    const teams = await Team.find({ division: req.params.divisionId });
    res.status(200).json(teams);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function createTeam(req, res) {
  try {
    const { name, division, venue, players, stats } = req.body;
    const newTeam = new Team({ name, division, venue, players, stats });
    await newTeam.save();
    res.status(201).json(newTeam);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
