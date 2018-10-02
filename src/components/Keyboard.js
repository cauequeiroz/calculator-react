import React from 'react';
import Button from './Button';

const Keyboard = props => {
  const {
    onEnterDigit,
    onEnterOperator,
    onEnterDot,
    onEnterEqual,
    onClear,
    onClearAll
  } = props;

  return (
    <div>
      <div className="clear-keys">
        <Button onClick={onClear} name="C" value="CLEAR" />
        <Button onClick={onClearAll} name="CA" value="CLEAR ALL" />
      </div>
      <div className="calculator-keypad">
        <div className="input-keys">
          <div className="digit-keys">
            <Button onClick={onEnterDigit} name="0" value="0" />
            <Button onClick={onEnterDot} name="dot" value="●" />
            <Button onClick={onEnterEqual} name="equals" value="=" />
            <Button onClick={onEnterDigit} name="1" value="1" />
            <Button onClick={onEnterDigit} name="2" value="2" />
            <Button onClick={onEnterDigit} name="3" value="3" />
            <Button onClick={onEnterDigit} name="4" value="4" />
            <Button onClick={onEnterDigit} name="5" value="5" />
            <Button onClick={onEnterDigit} name="6" value="6" />
            <Button onClick={onEnterDigit} name="7" value="7" />
            <Button onClick={onEnterDigit} name="8" value="8" />
            <Button onClick={onEnterDigit} name="9" value="9" />
          </div>
        </div>

        <div className="operator-keys">
          <Button onClick={onEnterOperator} name="divide" value="÷" />
          <Button onClick={onEnterOperator} name="multiply" value="×" />
          <Button onClick={onEnterOperator} name="subtract" value="−" />
          <Button onClick={onEnterOperator} name="add" value="+" />        
        </div>
      </div>
    </div>
  );
};

export default Keyboard;