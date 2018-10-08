import { IRegisterUser, IUser, Registration } from "./User";
import {
  tournamentCreation,
  ITournament,
  tournamentsFetch
} from "./Tournament";

export interface IState {
  currentUser: {} | IUser;
  registerUser: {} | IRegisterUser;
  loggedIn: boolean;
  registration:
    | Registration.REQUEST
    | Registration.SUCCESS
    | Registration.FAILURE;
  tournament: {
    tournamentCreation:
      | tournamentCreation.REQUEST
      | tournamentCreation.SUCCESS
      | tournamentCreation.FAILURE;
    tournaments: ITournament[];
    tournamentsFetch:
      | tournamentsFetch.REQUEST
      | tournamentsFetch.SUCCESS
      | tournamentsFetch.FAILURE;
  };
}
