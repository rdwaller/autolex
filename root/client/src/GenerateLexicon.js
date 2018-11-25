import React, { Component } from 'react';
import FlashCard from './FlashCard';
import styled from 'styled-components';
const axios = require('axios');


const ContainCards = styled.div `
  margin: auto;
  display: block;
  text-align: center;

  @media (max-width: 500px) {
    text-align: center
  }
`;

const LoadError = styled.p `
  margin: 25px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  color: red;
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
    const textEntry = this.props.removeCommonWords ? this.props.textEntry.toLowerCase().replace(/\ba\b|\ban\b|\bthe\b|\bfor\b|\band\b|\bnor\b|\bbut\b|\bor\b|\byet\b|\b\bso\b|\bi\b|\bme\b|\bwe\b|\bus\b|\byou\b|\bhe\b|\bhim\b|\bshe\b|\bher\b|\bit\b|\bthey\b|\bthem\b|\bthey\b|\bthem\b/g, '') : this.props.textEntry.toLowerCase();
    const strippedText = textEntry.replace(/[^\w\s]/gi,'').replace(/\r?\n|\r/gi,' ');
    const splitText = strippedText.split(' ');
    function discardDuplicates(value, index, self) {
      return self.indexOf(value) === index;
    }
    const filteredText = splitText.filter( discardDuplicates ); 
    const submittedLexicon = [];
    filteredText.forEach(word => {
      axios.get(`http://localhost:5000/oxford_api/${word}`)
      .then(definitionData => {
        let obj = {};
        let rootWord = definitionData['data']['results'][0]['lexicalEntries'][0]['text'];
        let definition = definitionData['data']['results'][0]['lexicalEntries'][0]['entries'][0]['senses'][0]['definitions'];
        obj['word'] = word;
        obj['rootWord'] = rootWord;
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
      const listLex = lex.map((d) => <FlashCard key={d.word} word={d.word} rootWord={d.rootWord} definition={d.definition}/>
      );

      return (
        <div>
          <ContainCards>
            {listLex}
          </ContainCards>
        </div>
      );
    } else {
      return (
        <LoadError>LOADING... If more than ten seconds elapses, something is probably wrong.</LoadError>
      )
    }
  }
}

export default GenerateLexicon;