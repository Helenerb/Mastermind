import React from "react";
import "./GameRow.css";
import { Validate } from "../helperFunctions.js";
import Validator from "./Validator.js";
import {SubmitGuess} from "../Game.js";
import {HoleRow} from "./HoleRow.js";

export class GameRow extends React.Component {
    // Du må sende inn:
    //colors
    //colorIdx
    //handleClick
    //handleSubmit
    //fasit
    //guess
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