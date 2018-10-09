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

export interface IRegisterTournament {
  _id: string;
  captainName: string;
  email: string;
  igns: string[];
  discordNames: string[];
}

export enum tournamentCreation {
  REQUEST = "TOURNAMENT CREATION REQUEST",
  SUCCESS = "TOURNAMENT CREATION SUCCESS",
  FAILURE = "TOURNAMENT CREATION FAILURE"
}

export enum tournamentsFetch {
  REQUEST = "FETCH TOURNAMENTS REQUEST",
  SUCCESS = "FETCH TOURNAMENTS SUCCESS",
  FAILURE = "FETCH TOURNAMENTS FAIL"
}

export enum tournamentFetch {
  REQUEST = "FETCH TOURNAMENT REQUEST",
  SUCCESS = "FETCH TOURNAMENT SUCCESS",
  FAILURE = "FETCH TOURNAMENT FAIL"
}
