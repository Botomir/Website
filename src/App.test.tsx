import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  render(<App />);
});

test('renders Documentation link', () => {
  const linkElement = screen.getByText(/Docs/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Statistics link', () => {
  const linkElement = screen.getByText(/Stats/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders About link', () => {
  const linkElement = screen.getByText(/About/i);
  expect(linkElement).toBeInTheDocument();
});


test('renders Add to Server button', () => {
  const linkElement = screen.getByText(/Add To Server/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Donate button', () => {
  const linkElement = screen.getByText(/Donate/i);
  expect(linkElement).toBeInTheDocument();
});
