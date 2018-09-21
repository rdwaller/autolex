import React, { Component } from 'react';
import './FlashCard.css';

class FlashCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
  }

  render() {
    return(
      <li key={this.props.word} className="List-lex">{this.props.word}: {this.props.definition}</li>
    )
  }
}

export default FlashCard;