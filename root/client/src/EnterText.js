import React, { Component } from 'react';
import styled from 'styled-components';
import GenerateLexicon from './GenerateLexicon';

const Text = styled.span`
  color: white;
  font-family: Quicksand-regular, courier, sans-serif;
  font-size: 1em;
`;

const TextArea = styled.textarea`
  display: block;
  border-radius: 20px;
  padding: 15px;
  position: static;
  margin: auto;
  width: 80%;
  height: 100px;
  background: rgb(204, 204, 204);
  font-size: 1.2em;
  font-family: Quicksand-regular, courier, sans-serif;

  @media (max-width: 500px) {
    width: 80%;
    height: 100px;
  }
`;

const CheckboxField = styled.div`
  display: block;
  padding: 15px;
  position: static;
  text-align: center;
  font-size: 1.1em;
  font-family: Quicksand-regular, courier, sans-serif;
`

const GeneratorButton = styled.input`
  display: block;
  margin: 10px auto;
  padding: 8px;
  font-size: 1.2em;
  font-family: Quicksand-regular, courier, sans-serif;
  background: rgb(115, 115, 115);
  text-shadow: 1px 1px rgb(100, 100, 100);
  color: #e6e6e6;
  border-radius: 30px;
  border: 1px solid rgb(100, 100, 100);
  cursor: pointer;
  box-shadow: 0 1px 0 rgba(220, 220, 220, 0.5) inset;

  &:active {
    background: rgb(210, 210, 210);
    color: rgb(115, 115, 115);
  }
`;

class EnterText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typedValue: '',
      submittedValue: '',
      omitCommonWords: false,
      processSubmission: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
  }

  endProcessSubmission = () => {
    this.setState({ processSubmission: false});
  }

  handleChange(event) {
    this.setState({
      typedValue: event.target.value,
      processSubmission: false,
    });
  }

  handleCheckbox(event) {
    this.setState({
      omitCommonWords: event.target.checked,
      processSubmission: false,
    })
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
          <CheckboxField>
            <input
            name="wordFilter"
            type="checkbox"
            checked={this.state.omitCommonWords}
            onChange={this.handleCheckbox} />
            <label>
              <Text> Omit common words?</Text>
            </label>
          </CheckboxField>
          <GeneratorButton type="submit" value="Generate Lexicon" />
          <div style={{textAlign: "center"}}>
            <Text><strong>Notice: This is a demo version. Output is limited to ten cards.</strong></Text>
          </div>
        </form>
        {this.state.processSubmission && <GenerateLexicon textEntry={this.state.submittedValue} omitCommonWords={this.state.omitCommonWords} endProcessSubmission={this.endProcessSubmission} />}
      </div>
    );
  }
}

export default EnterText;
