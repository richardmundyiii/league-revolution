const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const venueSchema = new Schema({
  name: String,
  streetAddress: String,
  city: String,
  state: String,
  zipcode: Number,
  photoUrl: String,
  fullBar: Boolean,
  hasSmoking: Boolean,
  hasFood: Boolean,
});

module.exports = mongoose.model("Venue", venueSchema);
