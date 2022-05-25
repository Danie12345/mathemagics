import React from 'react';
import './Calculator.css';
import calculate from './logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      operation: null,
      next: null,
    };
    this.calculate = this.calculate.bind(this);
    this.appliers = ['AC', '+/-', '%'];
    this.operators = ['÷', '\u00d7', '-', '+', '='];
  }

  handleClick = (e) => {
    this.calculate(e.target.innerHTML);
  };

  handleKeyDown = (e) => {
    let btnName = e.key;
    if (!'.0123456789+-*/%=ac'.includes(btnName)) return;
    if (btnName === '*') btnName = '\u00d7';
    if (btnName === '/') btnName = '÷';
    if ('ac'.includes(btnName)) btnName = 'AC';
    this.calculate(btnName);
  };

  calculate = (btnName) => {
    this.setState((state) => calculate(state, btnName));
  }

  render() {
    const { total, operation, next } = this.state;
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
              {this.appliers.map((el) => <button key={el} onClick={this.handleClick} onKeyDown={this.handleKeyDown} className="button" type="button">{el}</button>)}
            </div>
            <div className="operands">
              <div className="numbers">
                {[...Array(9).keys()].map((i) => <button key={i} onClick={this.handleClick} onKeyDown={this.handleKeyDown} className="button" type="button">{i + 1}</button>)}
              </div>
              <div className="pivots">
                <button onClick={this.handleClick} onKeyDown={this.handleKeyDown} className="button x2" type="button">0</button>
                <button onClick={this.handleClick} onKeyDown={this.handleKeyDown} className="button" type="button">.</button>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="operators" type="button">
              {this.operators.map((el) => <button key={el} onClick={this.handleClick} onKeyDown={this.handleKeyDown} className="button" type="button">{el}</button>)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
