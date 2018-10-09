import {
  ITournament,
  ICreateTournament,
  tournamentsFetch,
  tournamentFetch
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

    return fetch(`/tournaments/${id}`, requestOptions)
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
