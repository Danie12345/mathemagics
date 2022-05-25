import React from 'react';
import './Calculator.css';
import calculate from './logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      operator: null,
      next: null,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.appliers = ['AC', '+/-', '%'];
    this.operators = ['÷', '\u00d7', '-', '+', '='];
  }

  handleClick = (e) => {
    console.log(e);
    this.setState((state) => calculate(state, e.target.innerHTML));
  };

  handleKeyDown = (e) => {
    if (e.keyCode === e.target.innerHTML) {
      console.log(e.keyCode);
      this.handleClick(e);
    }
  };

  render() {
    const { total, operator, next } = this.state;
    return (
      <div className="calculator">
        <div className="result">
          { total }
          { operator }
          { next }
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
