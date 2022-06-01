import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

import { Routes, Route, Navigate } from 'react-router-dom';

const Calculator = require('../components/calculator/Calculator.js').default;

test('loads the container with everything', () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
})