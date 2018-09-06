import React, { Component } from 'react';
const axios = require('axios');


class GenerateLexicon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lexicon: {}
    }
  }

  componentDidMount() {
    const textEntry = this.props.textEntry
    const strippedText = textEntry.replace(/[^\w\s]/gi,'').replace(/\r?\n|\r/gi,' ');
    const splitText = strippedText.split(' ');
    console.log(splitText);
    splitText.forEach(word => {
      console.log(word);
      axios.get(`http://localhost:5000/dictionary_test/${word}`)
      .then(wordData => this.setState({lexicon: wordData['data']['results'][0]['lexicalEntries'][0]['entries'] [0]['senses'][0]['definitions'] }));
    });
    
  }

  /* componentDidUpdate() {
    this.props.endProcessSubmission();
  } */

  render() {

    return (
      <div>
        <p>This component has rendered.</p>
      </div>
    );
  }
}

export default GenerateLexicon;