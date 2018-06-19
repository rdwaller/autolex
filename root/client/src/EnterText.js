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
    const TextInput = {
      TextInput: this.state.value
    };
    axios.post(`/api/texts`, { TextInput })
    .then(res => {
      alert('A text was submitted.');
      console.log(res);
      console.log(res.data);
    })
  }

  /* handleSubmit(event) {
    axios.post('/', {
     Text: this.state.value
    })
    .then(response => {
      alert('A text was submitted.');
    })
    event.preventDefault();
  } */

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