import IRegisterUser from "./User";

export interface IState {
  currentUser: {} | IUser;
  registerUser: {} | IRegisterUser;
  loggedIn: boolean;
  registration:
    | Registration.REQUEST
    | Registration.SUCCESS
    | Registration.FAILURE;
  tournamentCreation:
    | TournamentCreation.REQUEST
    | TournamentCreation.SUCCESS
    | TournamentCreation.FAILURE;
}

export enum Registration {
  REQUEST = "REGISTRATION REQUEST",
  SUCCESS = "REGISTRATION SUCCESS",
  FAILURE = "REGISTRATION FAILURE"
}

export enum TournamentCreation {
  REQUEST = "TOURNAMENT CREATION REQUEST",
  SUCCESS = "TOURNAMENT CREATION SUCCESS",
  FAILURE = "TOURNAMENT CREATION FAILURE"
}

export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  token: string;
}
