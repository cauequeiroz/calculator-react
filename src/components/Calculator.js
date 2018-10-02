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
    }, this.equal);
  }

  enterOperator(type) {
    const memory = this.state.memory.slice();

    const lastEntry = memory.pop();
    const isOperator = lastEntry.type === 'operator';
    const isUnfinishedNumber = lastEntry.value.endsWith('.');

    if (isOperator || isUnfinishedNumber) return;

    const operator = getOperator(type);
    this.saveOperatorToMemory(operator);
    this.equal();

    const string = `${this.state.string} ${operator} `;
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

  enterDot() {
    const memory = this.state.memory.slice();
    const { string } = this.state;
    const lastEntry = memory.pop();

    if (!lastEntry) return;

    const isNumber = lastEntry.type !== 'number';
    const hasDot = lastEntry.value.indexOf('.') >= 0

    if ( isNumber || hasDot ) return;

    const newMemory = [...memory, {
      type: 'number',
      value: lastEntry.value + '.'
    }];

    this.setState({
      memory: newMemory,
      string: string + '.'
    });
  }

  equal() {
    const memory = this.state.memory.slice(-3);
    let result;

    if ( memory.length !== 3 ||
      memory[0].type !== 'number' ||
      memory[1].type !== 'operator' ||
      memory[2].type !== 'number') {
      result = 0;    
    } else {
      result = eval(this.state.string);

      if (!Number.isInteger(result)) {
        result = result.toFixed(2);
      }
    }

    this.setState({ result });
  }

  clear() {
    const memory = this.state.memory.slice();
    const oldString = this.state.string;
    const lastEntry = memory.slice(-1)[0];

    if (!lastEntry) return;

    let string;

    if (lastEntry.type === 'operator') {
      string = oldString.slice(0, -3);
    } else {
      string = oldString.slice(0, lastEntry.value.length * -1);
    }
    
    memory.pop();
    this.setState({ memory, string, typing: 0 }, this.equal);
  }

  clearAll() {
    this.setState({
      string: '',
      result: 0,
      typing: null,
      memory: []
    })
  }

  render() {
    return (
      <div className="calculator">
        <Display
          string={this.state.string}
          result={this.state.result} />
        <Keyboard
          onEnterDigit={digit => this.enterDigit(digit)}
          onEnterOperator={operator => this.enterOperator(operator)}
          onEnterDot={() => this.enterDot()}
          onEnterEqual={() => this.equal()}
          onClear={() => this.clear()}
          onClearAll={() => this.clearAll()} />
      </div>
    );
  }
}

export default Calculator;
