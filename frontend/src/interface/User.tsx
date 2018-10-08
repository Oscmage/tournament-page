export interface IRegisterUser {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
}

export enum Registration {
  REQUEST = "REGISTRATION REQUEST",
  SUCCESS = "REGISTRATION SUCCESS",
  FAILURE = "REGISTRATION FAILURE"
}

export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  token: string;
}
