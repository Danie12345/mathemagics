import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

const Nav = require('../components/nav/Nav').default;

test('loads the nav with everything', () => {
  const components = <BrowserRouter><Nav /></BrowserRouter>;
  const tree = renderer.create(components).toJSON();
  expect(tree).toMatchSnapshot();
});
