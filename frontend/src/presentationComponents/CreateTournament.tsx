import * as React from "react";
import "../css/CreateTournament.css";
import Card from "./Card";
import Input from "./Input";

class CreateTournament extends React.Component {
  public render() {
    return (
      <div className="CreateTournament">
        <Card>
          <div className="CreateTournamentInner">
            <h2>Create new tournament!</h2>
            <form>
              <Input
                name="name"
                description="Name of Tournament"
                type="text"
                required={true}
                minLength={4}
              />
              <div className="Input">
                <span>Description</span>
                <textarea name="description" />
              </div>
              <Input
                name="date"
                description="Date (When will it take place)"
                type="date"
                required={true}
              />
              <Input
                name="date"
                description="Time"
                type="time"
                required={true}
              />
              <Input
                name="maxTeams"
                description="Max amount of teams"
                type="number"
                required={true}
              />
              <Input
                name="registerDeadline"
                description="Date to last register"
                type="date"
                required={true}
              />
              <Input
                name="registerDeadline"
                description="Time to last register"
                type="time"
                required={true}
              />
            </form>
          </div>
        </Card>
      </div>
    );
  }
}

export default CreateTournament;
