const Venue = require("../models/venue");

module.exports = {
  index,
  createVenue,
};

async function index(req, res) {
  try {
    const venues = await Venue.find({});
    res.status(200).json(venues);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function createVenue(req, res) {
  try {
    const {
      name,
      streetAddress,
      city,
      state,
      zipcode,
      photoUrl,
      fullBar,
      hasSmoking,
      hasFood,
    } = req.body;
    const newVenue = new Venue({
      name,
      streetAddress,
      city,
      state,
      zipcode,
      photoUrl,
      fullBar,
      hasSmoking,
      hasFood,
    });
    await newVenue.save();
    res.status(201).json(newVenue);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
