import React, { Component } from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import EnterText from './EnterText.js';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Quicksand-Regular';
    src: url(./fonts/Quicksand-Regular.otf);
  }
`

const AppHeader = styled.header`
  margin: 0;
  height: 125px;
  padding: 0 45px;
  color: rgb(240, 240, 240);
`;

const AppTitle = styled.h1`
  text-align: left;
  font-family: Quicksand-Regular, sans-serif;
  font-size: 45px;
  margin: 30px 0px 0px 0px;
  padding: 100px;
  padding: 0.5em 0 0;

  @media (max-width: 1000px) {
    text-align: center;
  }
`;

const AppDescription = styled.h3`
  font-family: sans-serif;
  font-size: 20px;
  margin: 0

  @media (max-width: 1000px) {
    text-align: center;
  }
`;

const Content = styled.div`
  margin: 25px auto;
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
        <Content>       
          <EnterText />
        </Content>  
      </div>
      
    );
  }
}

export default App;
