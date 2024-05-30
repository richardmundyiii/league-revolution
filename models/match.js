const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const matchSchema = new mongoose.Schema({
  teams: [{ type: mongoose.Schema.Types.ObjectId, ref: "Team" }],
  score: Object,
  approved: Boolean,
  date: Date,
});

module.exports = mongoose.model("Match", matchSchema);
