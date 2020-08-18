import React from "react";
import "./HoleRow.css";

export class ButtonHole extends React.Component {
    render() {
      return (
        <button
          className="circle"
          style={{ background: this.props.color }}
          onClick={this.props.onClick}
        >
          {this.props.value}
        </button>
      );
    }
  }
  
  // trenger vi en egen rad-komponent; siden man gjetter radhvis?
  // har funskjonen renderHole for å rendre på en kul måte?
  // kopiert etter board-klassen til tic-tac-toe
  export class HoleRow extends React.Component {
    renderHole(i) {
      const colI = this.props.colorIdx[i];
      return (
        <ButtonHole
          color={this.props.colors[colI]}
          onClick={() => this.props.onClick(i)}
        />
      );
    }
    render() {
      return (
        <div>
          <div className="board-row">
            {this.renderHole(0)}
            {this.renderHole(1)}
            {this.renderHole(2)}
            {this.renderHole(3)}
          </div>
        </div>
      );
    }
  }