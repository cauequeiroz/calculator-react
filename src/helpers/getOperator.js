const operators = {
  '×': '*',
  '−': '-',
  '+': '+',
  '÷': '/'
};

const getOperator = type => {
  return operators[type];
};

export default getOperator;