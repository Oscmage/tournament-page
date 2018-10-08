import { connect } from "react-redux";
import { createTournament } from "./../actions/Tournament";
import CreateTournament from "./../presentationComponents/CreateTournament";
import { ICreateTournament } from "../interface/Tournament";

const mapDispatchToProps = (dispatch: any) => ({
  onCreate: (tournamentParams: ICreateTournament): Promise<boolean> => {
    return dispatch(createTournament(tournamentParams));
  }
});

const mapStateToProps = (state: any) => {
  return {
    creator: state.authentication.user.id,
    creationStatus: state.tournamentCreation.tournamentCreation
  };
};
export const CreateTournamentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateTournament);
