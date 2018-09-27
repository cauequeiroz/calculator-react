import React from 'react';
import Button from './Button';

const Keyboard = props => {
  return (
    <div className="calculator-keypad">
      <div className="input-keys">
        <div className="function-keys">
          <Button name="clear" value="AC" />
          <Button name="sign" value="±" />
          <Button name="percent" value="%" />
        </div>

        <div className="digit-keys">
          <Button name="0" value="0" />
          <Button name="dot" value="●" />
          <Button name="1" value="1" />
          <Button name="2" value="2" />
          <Button name="3" value="3" />
          <Button name="4" value="4" />
          <Button name="5" value="5" />
          <Button name="6" value="6" />
          <Button name="7" value="7" />
          <Button name="8" value="8" />
          <Button name="9" value="9" />
        </div>
      </div>

      <div className="operator-keys">
        <Button name="divide" value="÷" />
        <Button name="multiply" value="×" />
        <Button name="subtract" value="−" />
        <Button name="add" value="+" />
        <Button name="equals" value="=" />
      </div>
  </div>
  );
};

export default Keyboard;