const Player = require("../models/player");

module.exports = {
  index,
  createPlayer,
};

async function index(req, res) {
  try {
    const players = await Player.find({ team: req.params.teamId });
    res.status(200).json(players);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function createPlayer(req, res) {
  try {
    const { name, userSub, team, stats } = req.body;
    const newPlayer = new Player({ name, userSub, team, stats });
    await newPlayer.save();
    res.status(201).json(newPlayer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
