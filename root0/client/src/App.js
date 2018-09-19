import React, { Component } from 'react';
import './App.css';
import EnterText from './EnterText.js';


class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">AutoLex</h1>
          <h3 className="App-description">Lexicon Generator</h3>
        </header>
        <div className="EnterText">
          <EnterText />
        </div>
      </div>
    );
  }
}

export default App;
