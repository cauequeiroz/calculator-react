import React from 'react';

const Display = props => {
  return (
    <div className="calculator-display">
      <input className="math-string" readOnly />
      <div className="auto-scaling-text">0</div>
    </div>
  );
};

export default Display;