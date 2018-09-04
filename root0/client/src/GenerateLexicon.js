import React, { Component } from 'react';


/* Setup Dictionary */

/**/

class GenerateLexicon extends Component {

  // TEST API SUBMISSION WITH PEARSON API //
  /* componentDidMount() {
    fetch("http://api.pearson.com/v2/dictionaries/lasde/entries?headword=caduceus")
    //.then(res => res.json())
    .then(
      (result) => {
        console.log(result)
      });
  } */
  // END TEST API SUBMISSION //

  componentDidUpdate() {
    this.props.endProcessSubmission();
  }

  render() {
    const textEntry = this.props.textEntry
    const strippedText = textEntry.replace(/[^\w\s]/gi,'').replace(/\r?\n|\r/gi,' ');
    const splitText = strippedText.split(' ');
    console.log(splitText);
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