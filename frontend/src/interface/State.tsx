import IRegisterUser from "./User";

export interface IState {
  currentUser: {} | IUser;
  registerUser: {} | IRegisterUser;
  loggedIn: boolean;
  registration:
    | Registration.REQUEST
    | Registration.SUCCESS
    | Registration.FAILURE;
}

export enum Registration {
  REQUEST = "REQUEST",
  SUCCESS = "SUCCESS",
  FAILURE = "FAILURE"
}

export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  jwt: string;
}
