import React, { Component } from 'react';
import styled from 'styled-components';


const Card = styled.li `
  display: block;
  margin: 5em auto;
  border-radius: 2.5%;
  background-color: orange;
  height: 300px;
  width: 300px;
`

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
        <li className="List-lex" onClick={this.onClick}>{this.props.definition}</li>
      )
    }
  }
}

export default FlashCard;