

const React = require('react');
const ReactDom = require('react-dom');

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

const element = <Welcome name="Ryan" />;

ReactDOM.render(
  element,
  document.getElementById('root')
);

module.exports = Welcome