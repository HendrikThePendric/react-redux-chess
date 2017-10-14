import React, { Component } from 'react';
import FenForm from '../FenForm/FenForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FenForm />
        <h1>MOVE INPUTS</h1>
        <h1>BOARD</h1>
      </div>
    );
  }
}

export default App;
