import React, { useState } from 'react';
import './Calculator.css';
import calculate from './logic/calculate';

const Calculator = () => {
  const [screen, setScreen] = useState({ total: null, operation: null, next: null });
  const appliers = ['AC', '+/-', '%'];
  const operators = ['÷', '\u00d7', '-', '+', '='];

  const recalculate = (btnName) => {
    setScreen(calculate(screen, btnName));
  };

  const handleClick = (e) => {
    recalculate(e.target.innerHTML);
  };

  const handleKeyDown = (e) => {
    let btnName = e.key;
    if (!'.0123456789+-*/%=ac'.includes(btnName)) return;
    if (btnName === '*') btnName = '\u00d7';
    if (btnName === '/') btnName = '÷';
    if ('ac'.includes(btnName)) btnName = 'AC';
    recalculate(btnName);
  };

  const { total, operation, next } = screen;
  let pipedTotal;
  let pipedNext;
  if (total) pipedTotal = total.toString().substring(0, 8);
  if (next) pipedNext = next.toString().substring(0, 8);
  return (
    <div className="calculator">
      <div className="result">
        { pipedTotal }
        { operation }
        { pipedNext }
      </div>
      <div className="sections">
        <div className="left">
          <div className="appliers">
            {appliers.map((el) => <button key={el} onClick={handleClick} onKeyDown={handleKeyDown} className="button" type="button">{el}</button>)}
          </div>
          <div className="operands">
            <div className="numbers">
              {[...Array(9).keys()].map((i) => <button key={i} onClick={handleClick} onKeyDown={handleKeyDown} className="button" type="button">{i + 1}</button>)}
            </div>
            <div className="pivots">
              <button onClick={handleClick} onKeyDown={handleKeyDown} className="button x2" type="button">0</button>
              <button onClick={handleClick} onKeyDown={handleKeyDown} className="button" type="button">.</button>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="operators" type="button">
            {operators.map((el) => <button key={el} onClick={handleClick} onKeyDown={handleKeyDown} className="button" type="button">{el}</button>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
