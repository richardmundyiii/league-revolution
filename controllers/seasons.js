const Season = require("../models/season");

module.exports = {
  index,
  create,
  updateSeason,
};

async function index(req, res) {
  try {
    const seasons = await Season.find({});
    res.status(200).json(seasons);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function create(req, res) {
  try {
    const { name, year } = req.body;
    const newSeason = new Season({ name, year });
    await newSeason.save();
    res.status(201).json(newSeason);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function updateSeason(req, res) {
  try {
    const { id } = req.params;
    const { name, year, isActive } = req.body;
    const updatedSeason = await Season.findByIdAndUpdate(
      id,
      {
        name,
        year,
        isActive,
      },
      { new: true }
    );
    res.status(200).json(updateSeason);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
