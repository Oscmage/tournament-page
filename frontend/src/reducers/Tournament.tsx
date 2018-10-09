import { tournamentCreation, tournamentFetch } from "../interface/Tournament";

export default function tournament(state = {}, action: any) {
  switch (action.type) {
    case tournamentCreation.REQUEST:
      return { ...state, status: tournamentCreation.REQUEST };
    case tournamentCreation.SUCCESS:
      return { ...state, status: tournamentCreation.SUCCESS };
    case tournamentCreation.FAILURE:
      return { ...state, status: tournamentCreation.FAILURE };
    case tournamentFetch.REQUEST:
      return { ...state, [action.id]: { status: tournamentFetch.REQUEST } };
    case tournamentFetch.SUCCESS:
      return {
        ...state,
        [action.id]: {
          status: tournamentFetch.SUCCESS,
          tournament: action.tournament
        }
      };
    case tournamentFetch.FAILURE:
      return { ...state, [action.id]: { status: tournamentFetch.FAILURE } };
    default:
      return state;
  }
}
