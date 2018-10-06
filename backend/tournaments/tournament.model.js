const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
  teams: [],
  available: { type: Boolean, required: true }
});

/* Should be inside teams
const teamSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  members: [{ ign: String, required: true }],
  acceptedIn: { type: Boolean }
});
*/

tournamentSchema.set("toJSON", { virtuals: true });

module.exports = mongoose.model("Tournament", tournamentSchema);
