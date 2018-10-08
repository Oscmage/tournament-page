import * as React from "react";
import "../css/CreateTournament.css";
import "../css/DatePicker.css";
import Card from "./Card";
import Input from "./Input";
import { ICreateTournament } from "../interface/Tournament";
import * as Datetime from "react-datetime";
import * as moment from "moment";
import { tournamentCreation } from "../interface/Tournament";

class CreateTournament extends React.Component<
  {
    onCreate: (tournamentParams: ICreateTournament) => void;
    creator: string;
    creationStatus?: tournamentCreation;
  },
  {
    name: string;
    description: string;
    date: moment.Moment;
    registerDeadline: moment.Moment;
    maxTeams: number;
    admins: [];
    available: boolean;
  }
> {
  public constructor(props: any) {
    super(props);
    this.state = {
      name: "",
      description: "",
      date: moment(),
      registerDeadline: moment(),
      maxTeams: 100,
      admins: [],
      available: true
    };
  }
  public render() {
    const { creationStatus } = this.props;
    const status = this.getStatusHtml(creationStatus);
    return (
      <div className="CreateTournament">
        <Card>
          <div className="CreateTournamentInner">
            <h2>Create new tournament!</h2>
            <form onSubmit={this.onSubmit}>
              <Input
                name="name"
                value={this.state.name}
                onChange={this.updateName}
                description="Name of Tournament"
                type="text"
                required={true}
                minLength={4}
              />
              <div className="Input">
                <span>Description</span>
                <textarea
                  value={this.state.description}
                  onChange={this.updateDescription}
                  required
                  name="description"
                />
              </div>
              <div className="Input">
                <span>Tournament Date</span>
                <Datetime
                  value={this.state.date}
                  onChange={this.updateDate}
                  className="Input"
                />
              </div>
              <Input
                value={this.state.maxTeams}
                onChange={this.updateMaxTeams}
                name="maxTeams"
                min={2}
                max={10000}
                description="Max amount of teams"
                type="number"
                required={true}
              />
              <div className="Input">
                <span>Register Deadline</span>
                <Datetime
                  value={this.state.registerDeadline}
                  onChange={this.updateRegisterDeadline}
                  className="Input"
                />
              </div>
              <div className="Input">
                <input className="Input" type="submit" value="Create" />
              </div>
              <div className="CreationResult">{status}</div>
            </form>
          </div>
        </Card>
      </div>
    );
  }

  private getStatusHtml = (status: tournamentCreation | undefined) => {
    switch (status) {
      case tournamentCreation.REQUEST:
        return <span>Nice spinner for loading...</span>;
      case tournamentCreation.SUCCESS:
        return <span>Success! Good luck with the tournament!</span>;
      case tournamentCreation.FAILURE:
        return <span>Something went wrong :'(</span>;
      default:
        return "";
    }
  };

  private updateName = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      ...this.state,
      name: event.target.value
    });
  };

  private updateDescription = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    this.setState({
      ...this.state,
      description: event.target.value
    });
  };

  private updateMaxTeams = (event: React.ChangeEvent<HTMLInputElement>) => {
    const maxTeams = parseInt(event.target.value, 10);
    this.setState({
      ...this.state,
      maxTeams
    });
  };

  private updateDate = (date: moment.Moment) => {
    this.setState({
      ...this.state,
      date
    });
  };

  private updateRegisterDeadline = (date: moment.Moment) => {
    this.setState({
      ...this.state,
      registerDeadline: date
    });
  };

  private onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const {
      name,
      description,
      date,
      registerDeadline,
      maxTeams,
      admins,
      available
    } = this.state;
    const { creator } = this.props;
    const tournamentParams: ICreateTournament = {
      creator,
      name,
      description,
      date,
      registerDeadline,
      maxTeams,
      admins,
      available
    };
    this.props.onCreate(tournamentParams);
  };
}

export default CreateTournament;
