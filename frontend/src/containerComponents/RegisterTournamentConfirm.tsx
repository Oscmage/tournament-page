import * as React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { confirmRegisterTournament } from "./../actions/Tournament";
import "../css/RegisterConfirm.css";
import Spinner from "src/presentationComponents/Spinner";

class RegisterTournamentConfirmContainer extends React.Component<
  {
    match: any /*Match object from react router*/;

    registerConfirm: (tournamentId: string, teamId: string) => Promise<any>;
  },
  { response: undefined | boolean }
> {
  public constructor(props: any) {
    super(props);
    this.state = {
      response: undefined
    };
  }

  public componentDidMount() {
    // These ids are set from react router.
    const { tournamentdId, teamId } = this.props.match.params;
    this.props
      .registerConfirm(tournamentdId, teamId)
      .then(() => {
        this.setState({ ...this.state, response: true });
      })
      .catch(() => {
        this.setState({ ...this.state, response: false });
      });
  }

  public render() {
    // This should be done in another ocmponent
    const { response } = this.state;
    if (response !== undefined) {
      if (response) {
        // Positive
        return (
          <div className="RegisterConfirm">
            <h2>
              Your team is now registered, you should now be able to find your
              team in the confirmed teams list.
            </h2>
          </div>
        );
      } else {
        return (
          <div className="RegisterConfirm">
            <h2>We could not confirm this registration</h2>
          </div>
        );
      }
    } else {
      return (
        <div className="RegisterConfirm">
          <Spinner />
        </div>
      );
    }
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  registerConfirm: (tournamentId: string, teamId: string): Promise<any> => {
    return dispatch(confirmRegisterTournament(tournamentId, teamId));
  }
});

export default withRouter(connect(
  null,
  mapDispatchToProps
)(RegisterTournamentConfirmContainer) as any);
