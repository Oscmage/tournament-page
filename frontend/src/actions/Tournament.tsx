import { ITournament, ICreateTournament } from "../interface/Tournament";
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

export function fetchTournaments() {
  // Try to fetch tournaments
  return (dispatch: any) => {
    dispatch(fetchTournamentRequest());
    const head = { ...{ "Content-Type": "application/json" }, ...authHeader() };
    const requestOptions = {
      method: "GET",
      headers: head
    };

    return fetch("/tournaments", requestOptions)
      .then(handleResponse)
      .then(tournaments => {
        dispatch(fetchTournamentSuccess(tournaments));
      })
      .catch(() => {
        dispatch(fetchTournamentFail());
      });
  };
}

function fetchTournamentRequest() {
  return {
    type: fetchTournamentsRequest
  };
}

function fetchTournamentSuccess(tournaments: ITournament[]) {
  return {
    type: fetchTournamentsSuccess,
    tournaments
  };
}

function fetchTournamentFail() {
  return {
    type: fetchTournamentsFail
  };
}

export const fetchTournamentsRequest = "FETCH TOURNAMENT REQUEST";
export const fetchTournamentsSuccess = "FETCH TOURNAMENT SUCCESS";
export const fetchTournamentsFail = "FETCH TOURNAMENT FAIL";
