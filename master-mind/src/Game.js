import React from "react";
import "./Game.css";
import {GameRow} from "./components/GameRow.js"

// Hvordan fungerer spillet?
// 1. Fire farger blir gitt som fasit. Den må ligge i state ett eller annet sted, som et array.
//      Legger den inn i constructoren og dermed staten til Game.
// 2. Du må finne en måte å legge inn fasit. I første omgang kan den gis av bruker.
// 3. Du må finne ut en måte å gjette på. Dette må tas som input fra bruker.
//        I første omgang kan du bruke en innebygget ting i reactstrap og så modifisere den.
//        Der må du på en eller annen måte skrive inn fargen.
//        I første omgang trenger du kanskje ikke ha fager, bare skrive dem inn
//        Du trenger da en måte å lagre hvilke farger som finnes i spillet, for å validere bruker-input
//        Hvis du bruker en dropdown for eksempel, sammen med et form, kan du begrense alternativene
//        Dropdown slik som den er implementert nå, vil ikke ta inn noe. Så det må du endre på


export class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fasit: Array(1, 1, 2, 1), // denne skal da etterhvert byttes ut med fasiten
      colors: Array("lightblue", "lightgreen", "gold", "lightpink"),
      colorIdx: Array(0, 1, 2, 3),
      guess: Array(4, 4, 4, 4),
    };
  }

  handleClick(i) {
    const colorIdx = this.state.colorIdx.slice();
    if (colorIdx[i] === 3) {
      colorIdx[i] = 0;
    } else {
      colorIdx[i] = colorIdx[i] + 1;
    }
    this.setState({
      ...this.state,
      colorIdx: colorIdx,
    });
  }

  handleSubmit() {
    const thisGuess = this.state.colorIdx.slice();
    this.setState({
      ...this.state,
      guess: thisGuess,
    });
  }

  render() {
    return (
        <div className="game">
            <GameRow colors={this.state.colors} colorIdx={this.state.colorIdx}
             handleClick={(i) => this.handleClick(i)}
            handleSubmit={() => this.handleSubmit()} fasit={this.state.fasit} guess={this.state.guess}/>
        </div>
    );
  }
}

