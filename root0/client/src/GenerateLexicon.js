import React, { Component } from 'react';
const axios = require('axios');

class GenerateLexicon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lexicon : {},
      loading: true
    };
  }

  componentDidMount() {
    let submittedLexicon = {};
    const textEntry = this.props.textEntry;
    const strippedText = textEntry.replace(/[^\w\s]/gi,'').replace(/\r?\n|\r/gi,' ');
    const splitText = strippedText.split(' ');
    splitText.forEach(word => {
      axios.get(`http://localhost:5000/dictionary_test/${word}`)
      .then(wordData => {
        submittedLexicon[word] = wordData['data']['results'][0]['lexicalEntries'][0]['entries'][0]['senses'][0]['definitions'];
        this.setState({ 
          lexicon: { submittedLexicon },
          loading: false
        });
      });
    });   
  }

  
  componentDidUpdate() {
    //this.props.endProcessSubmission();
  }


  render() {
    if (this.state.loading === false) {
      return (
        <div>
          {JSON.stringify(this.state.lexicon)};
        </div>
      );
    } else {
      return (
        <p>loading</p>
      )
    }
  }
}

export default GenerateLexicon;