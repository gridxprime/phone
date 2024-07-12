import React, { useState } from 'react';

function Calculator() {
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState('');
  const [firstOperand, setFirstOperand] = useState(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);

  const handleInput = (input) => {
    if (waitingForSecondOperand) {
      setDisplayValue(String(input));
      setWaitingForSecondOperand(false);
    } else {
      setDisplayValue(displayValue === '0' ? String(input) : displayValue + input);
    }
  };

  const handleOperator = (nextOperator) => {
    const inputValue = parseFloat(displayValue);

    if (firstOperand === null) {
      setFirstOperand(inputValue);
    } else if (operator) {
      const result = performCalculation(operator, firstOperand, inputValue);
      setDisplayValue(String(result));
      setFirstOperand(result);
    }

    setWaitingForSecondOperand(true);
    setOperator(nextOperator);
  };

  const performCalculation = (operator, firstOperand, secondOperand) => {
    switch (operator) {
      case '+':
        return firstOperand + secondOperand;
      case '-':
        return firstOperand - secondOperand;
      case '*':
        return firstOperand * secondOperand;
      case '/':
        return firstOperand / secondOperand;
      default:
        return secondOperand;
    }
  };

  const handleEquals = () => {
    const inputValue = parseFloat(displayValue);

    if (operator && firstOperand !== null) {
      const result = performCalculation(operator, firstOperand, inputValue);
      setDisplayValue(String(result));
      setFirstOperand(null);
      setOperator('');
      setWaitingForSecondOperand(true);
    }
  };

  const handleClear = () => {
    setDisplayValue('0');
    setOperator('');
    setFirstOperand(null);
    setWaitingForSecondOperand(false);
  };

  return (
    <section className='calculator'>
      <span>Calculator</span>
      <div className="value"><b>{displayValue}</b></div>
      <div className="calc">
        <span onClick={handleClear}>C</span>
        <span>CE</span>
        <span>%</span>
        <span onClick={() => handleOperator('*')}>x</span>
        <span onClick={() => handleInput('7')}>7</span>
        <span onClick={() => handleInput('8')}>8</span>
        <span onClick={() => handleInput('9')}>9</span>
        <span onClick={() => handleOperator('+')}>+</span>
        <span onClick={() => handleInput('4')}>4</span>
        <span onClick={() => handleInput('5')}>5</span>
        <span onClick={() => handleInput('6')}>6</span>
        <span onClick={() => handleOperator('-')}>-</span>
        <span onClick={() => handleInput('1')}>1</span>
        <span onClick={() => handleInput('2')}>2</span>
        <span onClick={() => handleInput('3')}>3</span>
        <span onClick={() => handleOperator('/')}>/</span>
        <span onClick={() => handleInput('.')}>,</span>
        <span onClick={() => handleInput('0')}>0</span>
        <span>+/-</span>
        <span onClick={handleEquals}>=</span>
      </div>
    </section>
  );
}

export default Calculator;
