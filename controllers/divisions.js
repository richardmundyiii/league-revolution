const Division = require("../models/division");

module.exports = {
  index,
  createDivision,
};

async function index(req, res) {
  try {
    const { seasonId } = req.params;
    const divisions = await Division.find({});
    res.status(200).json(divisions);
  } catch (error) {
    res.status(500).json({ message: error.messaage });
  }
}

async function createDivision(req, res) {
  try {
    const { name, season } = req.body;
    const newDivision = new Division({ name, season });
    await newDivision.save();
    res.status(201).json(newDivision);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
