import React, { Component } from 'react';
import FlashCard from './FlashCard';
import styled from 'styled-components';
const axios = require('axios');


const ContainCards = styled.div `
  margin: auto;
  text-align: center;

  @media (max-width: 500px) {
    text-align: center
  }
`;

class GenerateLexicon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lexicon : {},
      loading: true
    };
  }

  componentDidMount() {
    const textEntry = this.props.textEntry.toLowerCase();
    const strippedText = textEntry.replace(/[^\w\s]/gi,'').replace(/\r?\n|\r/gi,' ');
    const splitText = strippedText.split(' ');
    function discardDuplicates(value, index, self) {
      return self.indexOf(value) === index;
    }
    const filteredText = splitText.filter( discardDuplicates ); 
    const submittedLexicon = [];
    console.log(textEntry);
    console.log(strippedText);
    console.log(splitText);
    console.log(filteredText);
    filteredText.forEach(word => {
      axios.get(`http://localhost:5000/oxford_api/${word}`)
      .then(definitionData => {
        let obj = {};
        let definition = definitionData['data']['results'][0]['lexicalEntries'][0]['entries'][0]['senses'][0]['definitions'];
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
      const listLex = lex.map((d) => <FlashCard key={d.word} word={d.word} definition={d.definition}/>
      );

      return (
        <ContainCards>
           {listLex}
        </ContainCards>
      );
    } else {
      return (
        <p>Loading. If this message stays for more than a few seconds, there is a problem.</p>
      )
    }
  }
}

export default GenerateLexicon;