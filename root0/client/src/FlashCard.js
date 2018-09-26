import React, { Component } from 'react';
import './FlashCard.css';

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
        <li className="List-lex" onClick={this.onClick}>{this.props.word}</li>
      )
    } else {
      return( 
        <li className="List-lex" onClick={this.onClick}>{this.props.definition}</li>
      )
    }
  }
}

export default FlashCard;