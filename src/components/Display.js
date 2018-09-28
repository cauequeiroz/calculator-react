import React from 'react';

const Display = props => {
  const { string, result } = props;

  return (
    <div className="calculator-display">
      <input className="math-string" readOnly value={string} />
      <div className="auto-scaling-text">{result}</div>
    </div>
  );
};

export default Display;