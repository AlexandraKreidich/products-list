import { render, screen } from '@testing-library/react';
import { App } from './App';

test('renders app', () => {
  render(<App />);
  const div = screen.getByTestId('app-container');
  expect(div).toBeInTheDocument();
});
