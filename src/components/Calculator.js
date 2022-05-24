import React from 'react';
import './Calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator">
        <div className="result"> </div>
        <div className="operands">
          <div className="appliers">
            <button className="button" type="button">AC</button>
            <button className="button" type="button">+/-</button>
            <button className="button" type="button">%</button>
          </div>
        </div>
        <div>
          {Array(9).fill(1).map((el, i) => <button key={el} className="button" type="button">{i + 1}</button>)}
        </div>
        <div className="operators" type="button">
          <button className="button" type="button">/</button>
          <button className="button" type="button">*</button>
          <button className="button" type="button">-</button>
          <button className="button" type="button">+</button>
          <button className="button" type="button">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
