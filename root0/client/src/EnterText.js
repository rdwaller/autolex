import React, { Component } from 'react';
import GenerateLexicon from './GenerateLexicon';
const axios = require('axios');

class EnterText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typedValue: '',
      submittedValue: '',
      processSubmission: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  endProcessSubmission = () => {
    this.setState({ processSubmission: false});
  }

  handleChange(event) {
    this.setState({typedValue: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({submittedValue: this.state.typedValue});
    this.setState({processSubmission: true});
    //alert(`Submission received: ${this.state.submittedValue}`); --NOTE: Pops up before updating
  
    /* axios.post('http://localhost:5000/textSubmissions', { textSubmission })
    .then(res => {
      console.log('A text was submitted.');
      console.log(res.data);
    });

    //TODO: Get data from database.
    axios.get('http://localhost:5000/textSubmissions')
    .then(res => {
      console.log('GET request conducted.');
    }); */
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
          </label>
          <textarea value={this.state.typedValue} onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>
        {this.state.processSubmission && <GenerateLexicon textEntry={this.state.submittedValue} endProcessSubmission={this.endProcessSubmission} />}
      </div>
    );
  }
}

export default EnterText;