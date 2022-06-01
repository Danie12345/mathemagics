import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

const Nav = require('../components/nav/Nav').default;

test('loads the container with everything', () => {
  const tree = renderer.create(<BrowserRouter><Nav /></BrowserRouter>).toJSON();
  expect(tree).toMatchSnapshot();
});
