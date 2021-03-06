import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

const CalculatorSection = require('../components/calculator-section/CalculatorSection').default;

test('loads the calculator-section with everything', () => {
  const tree = renderer.create(<CalculatorSection />).toJSON();
  expect(tree).toMatchSnapshot();
});
