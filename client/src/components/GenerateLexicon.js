import React, { Component } from 'react';
import FlashCard from './FlashCard';
import styled from 'styled-components';
const axios = require('axios');


const ContainCards = styled.div `
  margin: auto;
  padding: 25px;
  display: block;
  text-align: center;

  @media (max-width: 500px) {
    text-align: center
  }
`;

const LoadError = styled.div `
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
    const commonWords = /\ba\b|\ban\b|\bthe\b|\bfor\b|\band\b|\bnor\b|\bbut\b|\bor\b|\byet\b|\b\bso\b|\bi\b|\bme\b|\bwe\b|\bus\b|\byou\b|\bhe\b|\bhim\b|\bshe\b|\bher\b|\bit\b|\bthey\b|\bthem\b|\bthey\b|\bthem\b|\bmy\b|\bmine\b|\byour\b|\byours\b|\bhis\b|\bhers\b|\btheir\b|\btheirs\b|\bour\b|\bours\b|\bam\b|\bare\b|\bis\b|\bat\b|\bby\b|\bfor\b|\bfrom\b|\bin\b|\binto\b|\bof\b|\bon\b|\bto\b|\bwith\b|\bthis\b|\bthat\b|/g;
    const textEntry = this.props.omitCommonWords ? this.props.textEntry.toLowerCase().replace(commonWords, '') : this.props.textEntry.toLowerCase();
    const strippedText = textEntry.replace(/[^\w\s]/gi,'').replace(/\r?\n|\r/gi,' ');
    const splitText = strippedText.split(' ');
    function discardDuplicates(value, index, self) {
      return self.indexOf(value) === index;
    }
    const filteredText = splitText.filter( discardDuplicates );
    //The line below limits the text to ten words for the live demo app.
    const limitedWords = filteredText.slice(0,11);
    const submittedLexicon = [];
    limitedWords.forEach(word => {
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
        })
      });
    });
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
        <LoadError><img src={require('../images/ajax-loader.gif')} alt="Loading..." /></LoadError>
      )
    }
  }
}

export default GenerateLexicon;
