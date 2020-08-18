import React from "react";
import "./SubmitGuess.css"

export class SubmitGuess extends React.Component {
    render() {
      return (
        <div>
          <button onClick={this.props.onClick} className="submit">
            {"SUBMIT"}
          </button>
        </div>
      );
    }
  }