const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const unapprovedMatchSchema = new mongoose.Schema({
  teams: [{ type: mongoose.Schema.Types.ObjectId, ref: "Team" }],
  score: Object,
  date: Date,
});

module.exports = mongoose.model("UnapprovedMatch", unapprovedMatchSchema);
