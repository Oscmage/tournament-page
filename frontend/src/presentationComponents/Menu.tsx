import * as React from "react";
import { Link } from "react-router-dom";

class Menu extends React.Component {
  public render() {
    return (
      <div className="Menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Menu;
