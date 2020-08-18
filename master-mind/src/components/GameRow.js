import React from "react";
import "./GameRow.css";
import { Validate } from "../helperFunctions.js";
import Validator from "./Validator.js";
import {SubmitGuess} from "./SubmitGuess.js";
import {HoleRow} from "./HoleRow.js";

export class GameRow extends React.Component {
    render() {
    return (
        <div className="game">
            <HoleRow
              colors={this.props.colors}
              colorIdx={this.props.colorIdx}
              onClick={(i) => this.props.handleClick(i)}
            />
            <SubmitGuess onClick={() => this.props.handleSubmit()} />
          <Validator validate={Validate(this.props.fasit, this.props.guess)} />
        </div>
    );
  }
}