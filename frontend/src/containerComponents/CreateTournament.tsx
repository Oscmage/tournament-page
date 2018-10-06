import { connect } from "react-redux";
import { createTournament } from "./../actions/Tournament";
import CreateTournament from "./../presentationComponents/CreateTournament";
import ICreateTournament from "../interface/Tournament";

const mapDispatchToProps = (dispatch: any) => ({
  onCreate: (tournamentParams: ICreateTournament): Promise<boolean> => {
    return dispatch(createTournament(tournamentParams));
  }
});

export const CreateTournamentContainer = connect(
  null,
  mapDispatchToProps
)(CreateTournament);
