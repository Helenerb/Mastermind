import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Card} from 'react-bootstrap';
import {Game} from './Game';
import ReactDOM from "react-dom";

function App() {
  return (
    <div className="Card-center">
      <Card style={{ width: '40rem' }}>
        <Card.Body>
            <Game/>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;