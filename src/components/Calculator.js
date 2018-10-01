import React, { Component } from 'react';
import Display from './Display';
import Keyboard from './Keyboard';
import getOperator from '../helpers/getOperator';

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      string: '',
      result: 0,
      typing: null,
      memory: []
    }
  }

  enterDigit(digit) {
    const { string, typing } = this.state;

    const newString = string + digit;
    const newTyping = typing ? typing + digit : digit;

    this.saveNumberToMemory(digit);

    this.setState({
      string: newString,
      typing: newTyping
    });
  }

  enterOperator(type) {
    const memory = this.state.memory.slice();
    if (memory.pop().type === 'operator') return;

    const operator = getOperator(type);    

    this.saveOperatorToMemory(operator);

    const string = this.state.string + ' ' + operator + ' ';
    this.setState({ string });
  }

  saveNumberToMemory(number) {
    const memory = this.state.memory.slice();
    const lastIndex = memory.length - 1;

    let newMemory;

    if (memory[lastIndex] && memory[lastIndex].type === 'number') {
      memory[lastIndex].value = memory[lastIndex].value + number;
      newMemory = memory; 
    } else {
      const entry = { type: 'number', value: number };
      newMemory = [...memory, entry];
    }

    this.setState({
      memory: newMemory,
      typing: null
    });
  }

  saveOperatorToMemory(operator) {
    const memory = this.state.memory.slice();
    const entry = { type: 'operator', value: operator };
    const newMemory = [...memory, entry];

    this.setState({
      memory: newMemory,
      typing: null
    });
  }

  render() {
    return (
      <div className="calculator">
        <Display
          string={this.state.string}
          result={this.state.result} />
        <Keyboard
          onEnterDigit={digit => this.enterDigit(digit)}
          onEnterOperator={operator => this.enterOperator(operator)} />
      </div>
    );
  }
}

export default Calculator;
