const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const seasonSchema = new Schema({
  name: String,
  year: Number,
  divisions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Division" }],
  isActive: { type: Boolean, default: false },
});

module.exports = mongoose.model("Season", seasonSchema);
