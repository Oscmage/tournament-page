const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ign = new Schema({
  name: { type: String, required: true }
});

const teamSchema = new Schema({
  teamName: { type: String, required: true },
  email: { type: String, required: true },
  igns: [ign]
});

const tournamentSchema = new Schema({
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  }, // user id
  name: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  registerDeadline: { type: Date, required: true },
  maxTeams: { type: Number, required: true },
  admins: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // List of user ids
  teams: [teamSchema],
  available: { type: Boolean, required: true },
  type: { type: String, required: true }, // SOLO, DUO, SQUAD
  createdDate: { type: Date, default: Date.now }
});

tournamentSchema.set("toJSON", { virtuals: true });

module.exports = mongoose.model("Tournament", tournamentSchema);
