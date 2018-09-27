import React, { Component } from 'react';
import styled from 'styled-components';
import EnterText from './EnterText.js';


const AppHeader = styled.section`
  display: block;
  margin: 1em;
  text-align: left;
  height: 20vh;
  padding: 10vh;
  color: rgb(240, 240, 240);
`;

const AppTitle = styled.h1`
  font-family: "Quicksand", sans-serif;
  font-size: 5em;
  margin: 0;
`;

const AppDescription = styled.h3`
  font-family: "Quicksand", sans-serif;
  font-size: 3em;
  margin: 0 0.2em;
`;


class App extends Component {

  render() {
    return (
      <div>
        <AppHeader>
          <AppTitle>
            AutoLex
          </AppTitle>
          <AppDescription>
            Lexicon Generator
          </AppDescription>
        </AppHeader>          
        <div>
          <EnterText />
        </div>
      </div>
      
    );
  }
}

export default App;
