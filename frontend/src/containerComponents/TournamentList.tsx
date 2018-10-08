import * as React from "react";
import { connect } from "react-redux";
import { fetchTournaments } from "./../actions/Tournament";
import TournamentList from "./../presentationComponents/TournamentList";
import { ITournament } from "../interface/Tournament";

class TournamentListContainer extends React.Component<
  { tournamentList: ITournament[]; fetchTournaments: () => void },
  {}
> {
  public componentDidMount() {
    this.props.fetchTournaments();
  }

  public render() {
    return <TournamentList {...this.props} />;
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  fetchTournaments: () => {
    dispatch(fetchTournaments());
  }
});

const mapStateToProp = (state: any) => {
  const tournaments = state.tournaments;
  return { tournamentList: tournaments.tournaments };
};

export default connect(
  mapStateToProp,
  mapDispatchToProps
)(TournamentListContainer);
