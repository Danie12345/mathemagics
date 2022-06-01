import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

const Calculator = require('../components/calculator/Calculator').default;

test('loads the calculator with everything', () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('that the buttons work', () => {
  render(<Calculator />);
  fireEvent.click(screen.queryByText('8'));
  fireEvent.click(screen.queryByText('\u00d7'));
  fireEvent.click(screen.queryByText('7'));
  fireEvent.click(screen.queryByText('='));
  expect(screen.queryByText('56')).not.toBeNull();
});