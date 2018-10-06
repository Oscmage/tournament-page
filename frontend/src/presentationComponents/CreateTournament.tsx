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
                name="Name of Tournament"
                type="text"
                required={true}
                minLength={4}
              />
              <div className="Input">
                <span>Description</span>
                <textarea name="Description" />
              </div>
              <Input
                name="Date (When will it take place)"
                type="date"
                required={true}
              />
              <Input name="Time" type="time" required={true} />
              <Input name="Max amount of teams" type="number" required={true} />
              <Input name="Date to last register" type="date" required={true} />
              <Input name="Time to last register" type="time" required={true} />
            </form>
          </div>
        </Card>
      </div>
    );
  }
}

export default CreateTournament;
