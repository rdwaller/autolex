import React, { Component } from 'react';
const axios = require('axios');


/* Setup Dictionary */

/**/

class GenerateLexicon extends Component {

  componentDidUpdate() {
    this.props.endProcessSubmission();
  }

  render() {
    const textEntry = this.props.textEntry
    const strippedText = textEntry.replace(/[^\w\s]/gi,'').replace(/\r?\n|\r/gi,' ');
    const splitText = strippedText.split(' ');
    console.log(splitText);
    splitText.forEach(word => {
      console.log(word);
      axios.get(`http://localhost:5000/dictionary_test/${word}`)
      .then(res => {
        console.log(res);
      });
    });
    /* DICT TEST */

    /**/
    return (
      <div>
        <p>{strippedText}</p>
      </div>
    );
  }
}

export default GenerateLexicon;