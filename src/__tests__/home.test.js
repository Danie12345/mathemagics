import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

const Home = require('../components/home/Home').default;

test('loads the home with everything', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
