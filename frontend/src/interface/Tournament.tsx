import * as moment from "moment";

export interface ICreateTournament {
  creator: string;
  name: string;
  description: string;
  date: moment.Moment;
  registerDeadline: moment.Moment;
  maxTeams: number;
  admins: [];
  available: boolean;
}

export interface ITournament {
  _id: string;
  creator: string;
  name: string;
  description: string;
  date: moment.Moment;
  registerDeadline: moment.Moment;
  maxTeams: number;
  admins: [];
  teams: [];
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
