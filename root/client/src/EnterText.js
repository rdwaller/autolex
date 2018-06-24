import React, { Component } from 'react';
const axios = require('axios');

class EnterText extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit = event => {
    event.preventDefault();
    const textSubmission = {
      textSubmission: this.state.value
    };
    axios.post('http://localhost:5000/textSubmissions', { textSubmission })
    .then(res => {
      console.log('A text was submitted.');
      console.log(res.data);
    });
    /*axios.get('http://localhost:5000')
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
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default EnterText;