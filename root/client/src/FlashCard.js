import React, { Component } from 'react';
import styled from 'styled-components';


const Card = styled.span `
  display: inline-block;
  margin: 5px;
  border-radius: 1%;
  padding: 5vmin;
  background: rgb(204, 204, 204);
  width: 14.140em;
  height: 10em;
  font-size: 1.15em;
  font-family: Quicksand-regular, courier, sans-serif;
  overflow: auto;

  @media (max-width: 500px) {
    width: 9.898em;
    height: 7em;
    font-size: 1.10em;
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