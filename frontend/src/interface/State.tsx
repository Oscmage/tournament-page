import User from "./User";

export interface IState {
  user: User;
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
