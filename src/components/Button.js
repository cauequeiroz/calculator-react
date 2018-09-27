import React from 'react';

const Button = props => {
  const { name, value } = props;

  return (
    <button className={`calculator-key key-${name}`}>{value}</button>
  );
};

export default Button;