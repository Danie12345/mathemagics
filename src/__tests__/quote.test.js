import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

const Quote = require('../components/quote/Quote.js').default;

test('loads the quotes with everything', () => {
  const tree = renderer.create(<Quote />).toJSON();
  expect(tree).toMatchSnapshot();
})