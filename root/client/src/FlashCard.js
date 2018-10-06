import React, { Component } from 'react';
import styled from 'styled-components';


const Card = styled.span `
  display: block;
  margin: 2.5vmin auto;
  border-radius: 1%;
  padding: 5vmin;
  background: rgb(255, 240, 215);
  width: 15.55em;
  height: 11em;
  font-size: 1.25rem;
  overflow: auto;

  @media (max-width: 500px) {
    background: rgb(255, 240, 215);
    width: 11.31em;
    height: 8em;
  }
  `;

class FlashCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cardFront: true
    };
  }

  onClick = () => {
    this.setState({ cardFront: !(this.state.cardFront) })
  }

  render() {
    if (this.state.cardFront) {
      return( 
        <Card onClick={this.onClick}>{this.props.word}</Card>
      )
    } else {
      return( 
        <Card onClick={this.onClick}>{this.props.definition}</Card>

      )
    }
  }
}

export default FlashCard;