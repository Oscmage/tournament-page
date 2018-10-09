import * as React from "react";
import { connect } from "react-redux";
import { fetchTournament } from "./../actions/Tournament";
import RegisterTournament from "../presentationComponents/RegisterTournament";
import Spinner from "../presentationComponents/Spinner";
import { withRouter } from "react-router-dom";

class RegisterTournamentContainer extends React.Component<
  {
    fetchTournament: (id: string) => void;
    tournament: any;
    match: any /*Match object from react router*/;
    history: any;
  },
  {}
> {
  public componentDidMount() {
    // This id is set from react router.
    const { id } = this.props.match.params;
    this.props.fetchTournament(id);
  }

  public render() {
    const { tournament } = this.props;
    const { id } = this.props.match.params;
    console.log(tournament);
    if (tournament[id]) {
      return <RegisterTournament tournament={tournament[id].tournament} />;
    } else {
      return <Spinner />;
    }
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  fetchTournament: (id: string) => {
    dispatch(fetchTournament(id));
  }
});

const mapStateToProp = (state: any) => {
  const tournament = state.tournament;
  console.log(tournament);
  return { tournament };
};

export default withRouter(connect(
  mapStateToProp,
  mapDispatchToProps
)(RegisterTournamentContainer) as any);
