const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const divisionSchema = new Schema({
  name: String,
  season: { type: mongoose.Schema.Types.ObjectId, ref: "Season" },
  teams: [{ type: mongoose.Schema.Types.ObjectId, ref: "Team" }],
});

module.exports = mongoose.model("Division", divisionSchema);
