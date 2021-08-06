import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../../pages/home';

beforeEach(() => {
  render(<Home />);
});

test('renders name of application', () => {
  const linkElement = screen.getByText(/Botomir/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders subtext', () => {
  const linkElement = screen.getByText(/Your friendly neighbourhood Discord bot/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders add to server button', () => {
  const linkElement = screen.getByText(/Add to Server/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders donate button', () => {
  const linkElement = screen.getByText(/Donate/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders image alt text', () => {
  const linkElement = screen.getByAltText(/Botomir Logo/i);
  expect(linkElement).toBeInTheDocument();
});
