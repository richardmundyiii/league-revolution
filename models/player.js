const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playerSchema = new mongoose.Schema({
  name: String,
  userSub: { type: String, required: true, unique: true },
  team: { type: mongoose.Schema.Types.ObjectId, ref: "Team" },
  stats: {
    wins: Number,
    losses: Number,
    "01Highlights": Number,
    cricketHighlights: Number,
  },
});

module.exports = mongoose.model("Player", playerSchema);
