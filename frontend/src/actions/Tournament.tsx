import ICreateTournament from "../interface/Tournament";
import { authHeader } from "../helpers/AuthHeader";
import { TournamentCreation } from "../interface/State";
import { handleResponse } from "../helpers/Api";

export function createTournament(tournament: ICreateTournament): any {
  // Try to register tournament
  return (dispatch: any) => {
    dispatch(createTournamentRequest());
    const head = { ...{ "Content-Type": "application/json" }, ...authHeader() };
    const requestOptions = {
      method: "POST",
      headers: head,
      body: JSON.stringify(tournament)
    };

    return fetch("/tournaments/create", requestOptions)
      .then(handleResponse)
      .then(() => {
        dispatch(createTournamentSuccess());
      })
      .catch(() => {
        dispatch(createTournamentFail());
      });
  };
}

function createTournamentRequest() {
  return {
    type: TournamentCreation.REQUEST
  };
}

function createTournamentSuccess() {
  return {
    type: TournamentCreation.SUCCESS
  };
}

function createTournamentFail() {
  return {
    type: TournamentCreation.FAILURE
  };
}
