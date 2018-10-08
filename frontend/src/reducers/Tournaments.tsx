import { tournamentsFetch } from "../interface/Tournament";

export default function tournaments(state = {}, action: any) {
  switch (action.type) {
    case tournamentsFetch.REQUEST:
      return { ...state, status: tournamentsFetch.REQUEST };
    case tournamentsFetch.SUCCESS:
      return {
        ...state,
        tournaments: action.tournaments,
        status: tournamentsFetch.SUCCESS
      };
    case tournamentsFetch.FAILURE:
      return { ...state, status: tournamentsFetch.FAILURE };
    default:
      return state;
  }
}
