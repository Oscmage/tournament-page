import {
  ITournament,
  ICreateTournament,
  tournamentsFetch,
  tournamentFetch,
  IRegisterTournament
} from "../interface/Tournament";
import { authHeader } from "../helpers/AuthHeader";
import { tournamentCreation } from "../interface/Tournament";
import { handleResponse } from "../helpers/Api";
import * as moment from "moment";

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

    return fetch("/tournament/create", requestOptions)
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
        tournaments.map((tournament: ITournament) => {
          parseToMoment(tournament);
        });
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

export function fetchTournament(id: string) {
  // Try to fetch tournament based on id
  return (dispatch: any) => {
    dispatch(fetchTournamentRequest(id));
    const head = { ...{ "Content-Type": "application/json" }, ...authHeader() };
    const requestOptions = {
      method: "GET",
      headers: head
    };

    return fetch(`/tournament/${id}`, requestOptions)
      .then(handleResponse)
      .then((tournament: ITournament) => {
        parseToMoment(tournament);
        dispatch(fetchTournamentSuccess(id, tournament));
      })
      .catch(() => {
        dispatch(fetchTournamentFailure(id));
      });
  };
}

function parseToMoment(tournament: ITournament): void {
  tournament.date = moment(tournament.date);
  tournament.registerDeadline = moment(tournament.registerDeadline);
}

function fetchTournamentRequest(id: string) {
  return {
    type: tournamentFetch.REQUEST,
    id
  };
}

function fetchTournamentSuccess(id: string, tournament: ITournament) {
  return {
    type: tournamentFetch.SUCCESS,
    id,
    tournament
  };
}

function fetchTournamentFailure(id: string) {
  return {
    type: tournamentFetch.FAILURE,
    id
  };
}

export function registerTournament(id: string, info: IRegisterTournament) {
  // Try to register for a tournament based on id
  return (dispatch: any) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(info)
    };
    dispatch({ type: "Something" });

    return fetch(`/tournament/${id}/register`, requestOptions).then(
      handleResponse
    );
  };
}

export function confirmRegisterTournament(
  tournamentId: string,
  teamId: string
) {
  // Try to confirm registration
  return (dispatch: any) => {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" }
    };
    dispatch({ type: "Something" });

    return fetch(
      `/tournament/${tournamentId}/confirm/${teamId}`,
      requestOptions
    ).then(handleResponse);
  };
}
