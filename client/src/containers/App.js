import React, { Component } from 'react';
import styled from 'styled-components';
//import { createGlobalStyle } from 'styled-components';
import './style/App.css';
import EnterText from '../components/EnterText.js';

const AppHeader = styled.header`
  margin: 0;
  height: 125px;
  padding: 0 45px;
`;

const AppTitle = styled.h1`
  text-align: left;
  font-family: Quicksand-regular, courier, sans-serif;
  font-size: 50px;
  color: #e6e6e6;
  margin: 30px 0px 0px 0px;
  padding: 0.5em 0 0;

  @media (max-width: 1000px) {
    text-align: center;
  }
`;

const AppDescription = styled.h3`
  font-family: Quicksand-Regular, courier, sans-serif;
  font-size: 25px;
  color: #e6e6e6
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