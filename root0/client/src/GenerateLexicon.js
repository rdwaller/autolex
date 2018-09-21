import React, { Component } from 'react';
import FlashCard from './FlashCard';
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
    const textEntry = this.props.textEntry;
    const strippedText = textEntry.replace(/[^\w\s]/gi,'').replace(/\r?\n|\r/gi,' ');
    const splitText = strippedText.split(' ');
    function discardDuplicates(value, index, self) {
      return self.indexOf(value) === index;
    }
    const filteredText = splitText.filter( discardDuplicates ); 
    const submittedLexicon = [];
    filteredText.forEach(word => {
      axios.get(`http://localhost:5000/oxford_api/${word}`)
      .then(wordData => {
        let obj = {};
        let definition = wordData['data']['results'][0]['lexicalEntries'][0]['entries'][0]['senses'][0]['definitions']
        obj['word'] = word;
        obj['definition'] = definition;
        submittedLexicon.push(obj);
        function compare(a,b) {
          const wordA = a.word.toUpperCase();
          const wordB = b.word.toUpperCase();
          
          let comparison = 0;
          if (wordA > wordB) {
            comparison = 1;
          } else if (wordA < wordB) {
            comparison = -1;
          }
          return comparison
        }
        const alphabetizedSubmittedLexicon = submittedLexicon.sort(compare);
        

        this.setState({ 
          lexicon: { alphabetizedSubmittedLexicon },
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
      const lex = this.state.lexicon.alphabetizedSubmittedLexicon;
      const listLex = lex.map((d) => <ul><FlashCard word={d.word} definition={d.definition}/></ul>
      );

      return (
        <ul>
           {listLex}
        </ul>
      );
    } else {
      return (
        <p>Loading. If this message stays for more than a few seconds, there is a problem.</p>
      )
    }
  }
}

export default GenerateLexicon;