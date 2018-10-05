import * as React from "react";
import "../css/Card.css";

class Card extends React.Component {
  public render() {
    return <div className="Card">{this.props.children}</div>;
  }
}

export default Card;
