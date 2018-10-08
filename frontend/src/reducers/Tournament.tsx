import { tournamentCreation } from "../interface/Tournament";

export default function tournament(state = {}, action: any) {
  switch (action.type) {
    case tournamentCreation.REQUEST:
      return { ...state, status: tournamentCreation.REQUEST };
    case tournamentCreation.SUCCESS:
      return { ...state, status: tournamentCreation.SUCCESS };
    case tournamentCreation.FAILURE:
      return { ...state, status: tournamentCreation.FAILURE };
    default:
      return state;
  }
}
