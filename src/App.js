import React, { Component } from 'react';
import Container from './container';
import Svg from './nameSvg';
import './App.css';

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <Svg/>
        <Container/>
      </React.Fragment>
    );
  }
}

export default App;
