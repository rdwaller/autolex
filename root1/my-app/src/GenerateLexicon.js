import React, { Component } from 'react';


class GenerateLexicon extends Component {
  render() {
    const textEntry = this.props.textEntry
    const strippedText = textEntry.replace(/[^\w\s]/gi,'').replace(/\r?\n|\r/gi,' ');
    const splitText = strippedText.split(' ');
    console.log(splitText);
    return (
      <p>{strippedText}</p>
    );
  }
}

export default GenerateLexicon;