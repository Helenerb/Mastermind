// Fire sirkler som viser hvor mange riktige og gale forrige gjett var, basert på validate
// validate på formen answer = [riktig farge riktig plass, riktig farge feil plass, feil plass og farge]

import React from "react";
import "./Validator.css";

class Dot extends React.Component {
  //props: color
  render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 10 10"
        width="100%"
        height="100%"
      >
        <circle cx="5" cy="5" r="5" fill="black" stroke="hotpink" />
      </svg>
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
    /*
    let correctColorCorrectPlace = Array(this.props.validate[0])?.fill(
      <Dot fill="black" stroke="black" />
    );
    let correctColorWrongPlace = Array(this.props.validate[1])?.fill(
      <Dot fill="white" stroke="black" />
    );
    let wrongColorWrongPlace = Array(this.props.validate[2])?.fill(
      <Dot fill="none" stroke="none" />
    );*/
    let correctColorCorrectPlace = Array(this.props.validate[0])?.fill(
      <DotDiv />
    );
    let correctColorWrongPlace = Array(this.props.validate[1])?.fill(
      <DotDiv />
    );
    let wrongColorWrongPlace = Array(this.props.validate[2])?.fill(<DotDiv />);
    let answerCircles = [
      ...correctColorCorrectPlace,
      ...correctColorWrongPlace,
      ...wrongColorWrongPlace,
    ];
    console.log("answerCircles:", answerCircles);
    return (
      <div className="flex-container">
        <Dot />
        <Dot />
        <Dot />
        <Dot />
      </div>
    );
  }
}

export default Validator;
