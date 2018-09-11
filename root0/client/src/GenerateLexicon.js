import React, { Component } from 'react';
const axios = require('axios');

class GenerateLexicon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lexicon: []
    }
  }

  componentDidMount() {
    let lexicon = {};
    const textEntry = this.props.textEntry;
    const strippedText = textEntry.replace(/[^\w\s]/gi,'').replace(/\r?\n|\r/gi,' ');
    const splitText = strippedText.split(' ');
    splitText.forEach(async (word) => {
      await axios.get(`http://localhost:5000/dictionary_test/${word}`)
      .then(wordData => lexicon[word] = wordData['data']['results'][0]['lexicalEntries'][0]['entries'][0]['senses'][0]['definitions'])
      .then(this.setState({ lexicon: { lexicon } }));
    });   
  }

  /* componentDidUpdate() {
    this.props.endProcessSubmission();
  } */

  render() {

    return (
      <div>
        <p>{JSON.stringify(this.state.lexicon)}</p>
      </div>
    );
  }
}

export default GenerateLexicon;