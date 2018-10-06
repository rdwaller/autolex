import React, { Component } from 'react';
import styled from 'styled-components';
import GenerateLexicon from './GenerateLexicon';

const TextArea = styled.textarea`
  display: block;
  border-radius: 20px;
  padding: 15px;
  position: static;
  margin: auto;
  width: 80%;
  height: 100px;
  background: rgb(204, 204, 204);
  font-size: 1.5em;

  @media (max-width: 500px) {
    width: 80%;
    height: 100px;
  }
`;

const GeneratorButton = styled.input`
  display: block;
  margin: 10px auto;
  padding: 2vmin 3vmin;
  font-size: 1.5em;
  background: rgb(110, 110, 110);
  font-weight: bold;
  text-shadow: 1px 1px rgb(100, 100, 100);
  color: rgb(204, 204, 204);
  border-radius: 30px;
  border: 1px solid rgb(100, 100, 100);
  cursor: pointer;
  box-shadow: 0 1px 0 rgba(220, 220, 220, 0.5) inset;

  &:active {
    background-color: green;
    color: red;
  }
`;

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
    this.setState({submittedValue: this.state.typedValue});
    this.setState({processSubmission: true});
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <TextArea placeholder="Enter a text here." value={this.state.typedValue} onChange={this.handleChange} />          
          <GeneratorButton type="submit" value="Generate Lexicon" />
        </form>
        {this.state.processSubmission && <GenerateLexicon textEntry={this.state.submittedValue} endProcessSubmission={this.endProcessSubmission} />}
      </div>
    );
  }
}

export default EnterText;