import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

const CalculatorSection = require('../components/calculator-section/CalculatorSection.js').default;

test('loads the container with everything', () => {
  const tree = renderer.create(<CalculatorSection />).toJSON();
  expect(tree).toMatchSnapshot();
})