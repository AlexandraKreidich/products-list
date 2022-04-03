import { fireEvent, render, screen } from '@testing-library/react';
import { Search } from './Search';

test('search input test', () => {
  const elementId = 'search';
  const testInputValue = 'karl';
  render(<Search />);
  const input = screen.getByTestId(elementId);
  fireEvent.change(input, { target: { value: testInputValue } });
  expect(screen.getByDisplayValue(testInputValue).id).toBe(elementId);
});