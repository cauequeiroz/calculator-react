import React, { Component } from 'react';
import Display from './Display';
import Keyboard from './Keyboard';

class Calculator extends Component {
  render() {
    return (
      <div className="calculator">
        <Display />
        <Keyboard />
      </div>
    );
  }
}

export default Calculator;
