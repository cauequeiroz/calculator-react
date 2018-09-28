import React from 'react';

const Button = props => {
  const { name, value, onClick } = props;

  return (
    <button
      className={`calculator-key key-${name}`}
      onClick={() => onClick(value)}>{value}</button>
  );
};

export default Button;