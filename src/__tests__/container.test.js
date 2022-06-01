import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

const Container = require('../components/container/Container').default;

test('loads the container with everything', () => {
  const tree = renderer.create(<BrowserRouter><Container /></BrowserRouter>).toJSON();
  expect(tree).toMatchSnapshot();
});
