import { TournamentCreation } from "./../interface/State";
import {
  fetchTournamentsRequest,
  fetchTournamentsSuccess,
  fetchTournamentsFail
} from "../actions/Tournament";

export default function tournamentCreation(state = {}, action: any) {
  switch (action.type) {
    case TournamentCreation.REQUEST:
      return { ...state, tournamentCreation: TournamentCreation.REQUEST };
    case TournamentCreation.SUCCESS:
      return { ...state, tournamentCreation: TournamentCreation.SUCCESS };
    case TournamentCreation.FAILURE:
      return { ...state, tournamentCreation: TournamentCreation.FAILURE };
    case fetchTournamentsRequest:
      return state;
    case fetchTournamentsSuccess:
      return { ...state, tournaments: action.tournaments };
    case fetchTournamentsFail:
      return state;
    default:
      return state;
  }
}
