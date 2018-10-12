import * as React from "react";
import "../css/Card.css";

class Card extends React.Component<{ extraClassName?: string }, any> {
  public render() {
    return (
      <div
        className={
          "Card " + (this.props.extraClassName ? this.props.extraClassName : "")
        }
      >
        {this.props.children}
      </div>
    );
  }
}

export default Card;
