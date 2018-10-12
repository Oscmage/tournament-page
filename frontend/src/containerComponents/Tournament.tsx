import * as React from "react";
import { connect } from "react-redux";
import { fetchTournament, registerTournament } from "./../actions/Tournament";
import Tournament from "../presentationComponents/Tournament";
import Spinner from "../presentationComponents/Spinner";
import { withRouter } from "react-router-dom";
import { IRegisterTournament } from "../interface/Tournament";

class TournamentContainer extends React.Component<
  {
    fetchTournament: (id: string) => void;
    tournament: any;
    match: any /*Match object from react router*/;
    history: any;
    register: (id: string, info: IRegisterTournament) => Promise<any>;
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
    if (tournament[id] && tournament[id].tournament) {
      return (
        <Tournament
          register={this.props.register}
          tournament={tournament[id].tournament}
        />
      );
    } else {
      return <Spinner />;
    }
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  fetchTournament: (id: string) => {
    dispatch(fetchTournament(id));
  },
  register: (id: string, info: IRegisterTournament): Promise<any> => {
    return dispatch(registerTournament(id, info));
  }
});

const mapStateToProp = (state: any) => {
  const tournament = state.tournament;
  return { tournament };
};

export default withRouter(connect(
  mapStateToProp,
  mapDispatchToProps
)(TournamentContainer) as any);
