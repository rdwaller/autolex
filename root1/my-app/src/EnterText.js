import React, { Component } from 'react';
import GenerateLexicon from './GenerateLexicon';


class EnterText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      submitted: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({submitted: true});
    alert(`Submission received: ${this.state.value}`);
  }

  renderLexicon() {
    this.setState({submitted: false});
    return <GenerateLexicon textEntry={this.state.value} />
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
          </label>
          <textarea value={this.state.value} onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>
        {this.state.submitted && this.renderLexicon()}
      </div>
    );
  }
}

export default EnterText;