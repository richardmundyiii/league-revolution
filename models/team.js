const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teamSchema = new Schema({
  name: String,
  division: { type: mongoose.Schema.Types.ObjectId, ref: "Division" },
  venue: { type: mongoose.Schema.Types.ObjectId, ref: "Venue" },
  players: [{ type: mongoose.Schema.Types.ObjectId, ref: "Player" }],
  stats: {
    wins: Number,
    losses: Number,
    totalLegsWon: Number,
    totalLegsLost: Number,
    teamGamesWon: Number,
    teamGamesLost: Number,
  },
});

module.exports = mongoose.model("Team", teamSchema);
