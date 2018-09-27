import React, { Component } from 'react';
import styled from 'styled-components';


const Card = styled.p `
  display: block;
  margin: 2.5vmin auto;
  border-radius: 3%;
  padding: 5vmin;
  background-color: orange;
  width: 80vw;
  height: 20vh;
  font-size: 5vmin;
  overflow: scroll;
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
        <Card onClick={this.onClick}>{this.props.definition}</Card>

      )
    }
  }
}

export default FlashCard;