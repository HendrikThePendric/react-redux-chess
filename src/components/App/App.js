import React, { Component } from 'react';
import FenInput from '../FenInput/FenInput';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FenInput />
        <h1>MOVE INPUTS</h1>
        <h1>BOARD</h1>
      </div>
    );
  }
}

export default App;
