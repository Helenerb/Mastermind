// Fire sirkler som viser hvor mange riktige og gale forrige gjett var, basert på validate
// validate på formen answer = [riktig farge riktig plass, riktig farge feil plass, feil plass og farge]

import React from "react";
import "./Validator.css";

class Dot extends React.Component {
  //props: color
  render() {
    return (
      <div className="flex-child">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 10 10"
          width="5em"
          height="5em"
        >
          <circle
            cx="5"
            cy="5"
            r="3"
            fill={this.props.fill}
            stroke={this.props.stroke}
            stroke-width="0.3"
          />
        </svg>
      </div>
    );
  }
}

class DotDiv extends React.Component {
  render() {
    return <div className="dot-div" />;
  }
}

class Validator extends React.Component {
  //this.props.validate: validate som sendes inn fra Game

  render() {
    console.log("validate: ", this.props.validate);

    let correctColorCorrectPlace = Array(this.props.validate[0])?.fill(
      <Dot fill="black" stroke="black" />
    );
    let correctColorWrongPlace = Array(this.props.validate[1])?.fill(
      <Dot fill="white" stroke="black" />
    ); /*
    let wrongColorWrongPlace = Array(this.props.validate[2])?.fill(
      <Dot fill="none" stroke="none" />*/
    let answerCircles = [
      ...correctColorCorrectPlace,
      ...correctColorWrongPlace,
    ];
    let answerCirc;
    console.log("answerCircles:", answerCircles);
    return (
      <div className="flex-container">
        {answerCircles[0]}
        {answerCircles[1]}
        {answerCircles[2]}
        {answerCircles[3]}
        {/*<Dot fill="hotpink" stroke="gray" />
        <Dot fill="lightblue" stroke="gray" />
        <Dot fill="pink" stroke="gray" />
    <Dot fill="green" stroke="gray" />*/}
      </div>
    );
  }
}

export default Validator;
