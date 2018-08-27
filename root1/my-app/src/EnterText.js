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
    this.endProcessSubmission = this.endProcessSubmission;
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