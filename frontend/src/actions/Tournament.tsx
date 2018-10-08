import {
  ITournament,
  ICreateTournament,
  tournamentsFetch
} from "../interface/Tournament";
import { authHeader } from "../helpers/AuthHeader";
import { tournamentCreation } from "../interface/Tournament";
import { handleResponse } from "../helpers/Api";

// CREATE A NEW TOURNAMENT

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
    type: tournamentCreation.REQUEST
  };
}

function createTournamentSuccess() {
  return {
    type: tournamentCreation.SUCCESS
  };
}

function createTournamentFail() {
  return {
    type: tournamentCreation.FAILURE
  };
}

// GET TOURNAMENTS

export function fetchTournaments() {
  // Try to fetch tournaments
  return (dispatch: any) => {
    dispatch(fetchTournamentsRequest());
    const head = { ...{ "Content-Type": "application/json" }, ...authHeader() };
    const requestOptions = {
      method: "GET",
      headers: head
    };

    return fetch("/tournaments", requestOptions)
      .then(handleResponse)
      .then(tournaments => {
        dispatch(fetchTournamentsSuccess(tournaments));
      })
      .catch(() => {
        dispatch(fetchTournamentsFailure());
      });
  };
}

function fetchTournamentsRequest() {
  return {
    type: tournamentsFetch.REQUEST
  };
}

function fetchTournamentsSuccess(tournaments: ITournament[]) {
  return {
    type: tournamentsFetch.SUCCESS,
    tournaments
  };
}

function fetchTournamentsFailure() {
  return {
    type: tournamentsFetch.FAILURE
  };
}
