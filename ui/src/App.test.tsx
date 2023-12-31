import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app title', () => {
  render(<App />);
  const appTitle = screen.getByText(/React Client App w\/ JWT Auth/i);
  expect(appTitle).toBeInTheDocument();
});
