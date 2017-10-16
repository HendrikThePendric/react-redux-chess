import React, { Component } from 'react';
import FenInput from '../FenInput/FenInput';
import Board from '../Board/Board';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="chess-game">
        <h3>A very basic game of Chess</h3>
        <FenInput />
        <Board/>
      </div>
    );
  }
}

export default App;
