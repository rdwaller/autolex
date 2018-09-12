import React, { Component } from 'react';
import GenerateLexicon from './GenerateLexicon';

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
    this.setState({
      typedValue: event.target.value,
      processSubmission: false
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    alert(this.state.processSubmission);
    this.setState({submittedValue: this.state.typedValue});
    this.setState({processSubmission: true});
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
        {this.state.processSubmission && <GenerateLexicon textEntry={this.state.submittedValue} processSubmission={this.state.processSubmission} endProcessSubmission={this.endProcessSubmission} />}
      </div>
    );
  }
}

export default EnterText;