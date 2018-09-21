import React, { Component } from 'react';
import './FlashCard.css';

class FlashCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      word: this.props.word,
      definition: this.props.definition,
      cardFront: true
    };
  }

  onClick = () => {
    this.setState({ cardFront: !(this.state.cardFront) })
  }

  render() {
    if (this.state.cardFront) {
      return( 
        <li key={this.state.word} className="List-lex" onClick={this.onClick}>{this.state.word}</li>
      )
    } else {
      return( 
        <li key={this.state.word} className="List-lex" onClick={this.onClick}>{this.state.definition}</li>
      )
    }
  }
}

export default FlashCard;