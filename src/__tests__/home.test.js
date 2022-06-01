import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

const Home = require('../components/home/Home.js').default;

test('loads the container with everything', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
})