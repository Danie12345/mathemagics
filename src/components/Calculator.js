import React from 'react';
import './Calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.appliers = ['AC', '+/-', '%'];
    this.operators = ['/', '*', '-', '+'];
  }

  render() {
    return (
      <div className="calculator">
        <div className="result"> </div>
        <div className="operands">
          <div className="appliers">
            {this.appliers.map((el) => <button key={el} className="button" type="button">{el}</button>)}
          </div>
        </div>
        <div>
          {[...Array(9).keys()].map((i) => <button key={i} className="button" type="button">{i + 1}</button>)}
          <div>
            <button className="button x2" type="button">0</button>
            <button className="button" type="button">.</button>
          </div>
        </div>
        <div className="operators" type="button">
          {this.operators.map((el) => <button key={el} className="button" type="button">{el}</button>)}
          <button className="button" type="button">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
