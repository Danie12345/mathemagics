import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

const Calculator = require('../components/calculator/Calculator').default;

test('loads the calculator with everything', () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});
