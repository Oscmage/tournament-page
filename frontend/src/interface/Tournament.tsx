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
  type: tournamentType;
}

export enum tournamentType {
  SOLO = "SOLO",
  DUO = "DUO",
  SQUAD = "SQUAD"
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
  teams: ITeam[];
  available: boolean;
  type: tournamentType;
}

export interface ITeam {
  _id: string;
  confirmed: boolean;
  igns: IPlayer[];
  teamName: string;
}

export interface IPlayer {
  _id: string;
  name: string;
}

export interface IRegisterTournament {
  teamName: string;
  email: string;
  igns: { name: string }[];
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

export enum tournamentRegister {
  REQUEST = "REGISTER TOURNAMENT REQUEST",
  SUCCESS = "REGISTER TOURNAMENT SUCCESS",
  FAILURE = "REGISTER TOURNAMENT FAIL"
}
