import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';

const Nav = require('../components/nav/Nav').default;
const Container = require('../components/container/Container').default;
const components = (<BrowserRouter><Nav /></BrowserRouter>);

test('loads the nav with everything', () => {
  const tree = renderer.create(components).toJSON();
  expect(tree).toMatchSnapshot();
});

test("selects a nav link", () => {
  render(<MemoryRouter><Container/></MemoryRouter>);
  fireEvent.click(screen.queryByText('Calculator'));
  expect(screen.queryByText('Use the very awesome calculator!')).not.toBeNull();
})