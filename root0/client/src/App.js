import React, { Component } from 'react';
import styled from 'styled-components';
import EnterText from './EnterText.js';


const AppHeader = styled.section`
  display: block;
  margin: 2.5vmin;
  height: 20vh;
  width: 100vw;
  color: rgb(240, 240, 240);
`;

const AppTitle = styled.h1`
  display: block;
  text-align: left;
  font-family: sans-serif;
  font-size: 12.5vmin;
  margin: 0.5em auto 0;
`;

const AppDescription = styled.h3`
  font-family: sans-serif;
  font-size: 5.33vmin;
  margin: 0
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
        <EnterText />
      </div>
      
    );
  }
}

export default App;
