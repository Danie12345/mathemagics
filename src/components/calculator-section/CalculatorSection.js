import React from 'react';
import Calculator from '../calculator/Calculator';

import './CalculatorSection.css';

const CalculatorSection = () => (
  <div className="section calculatorSection">
    <p className="description">Use the very awesome calculator!</p>
    <Calculator className="calculator" />
  </div>
);

export default CalculatorSection;
