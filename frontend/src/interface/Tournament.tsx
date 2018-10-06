export default interface ICreateTournament {
  creator: string;
  name: string;
  description: string;
  date: Date;
  registerDeadline: Date;
  maxTeams: number;
  admin: [];
  available: boolean;
}

/*
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
  available: { type: Boolean, required: true }*/
