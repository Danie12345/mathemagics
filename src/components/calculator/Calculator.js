import React from 'react';
import './Calculator.css';
import calculate from './logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.appliers = ['AC', '+/-', '%'];
    this.operators = ['÷', '\u00d7', '-', '+'];
  }

  render() {
    return (
      <div className="calculator">
        <div className="result">0</div>
        <div className="sections">
          <div className="left">
            <div className="appliers">
              {this.appliers.map((el) => <button key={el} className="button" type="button">{el}</button>)}
            </div>
            <div className="operands">
              <div className="numbers">
                {[...Array(9).keys()].map((i) => <button key={i} className="button" type="button">{i + 1}</button>)}
              </div>
              <div className="pivots">
                <button className="button x2" type="button">0</button>
                <button className="button" type="button">.</button>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="operators" type="button">
              {this.operators.map((el) => <button key={el} className="button" type="button">{el}</button>)}
              <button className="button" type="button">=</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
