import { TournamentCreation } from "./../interface/State";

export default function tournamentCreation(state = {}, action: any) {
  switch (action.type) {
    case TournamentCreation.REQUEST:
      return { ...state, tournamentCreation: TournamentCreation.REQUEST };
    case TournamentCreation.SUCCESS:
      return { ...state, tournamentCreation: TournamentCreation.SUCCESS };
    case TournamentCreation.FAILURE:
      return { ...state, tournamentCreation: TournamentCreation.FAILURE };
    default:
      return state;
  }
}
