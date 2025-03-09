import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Header } from './header';

// Mock the ModeToggle component
vi.mock('../mode-toggle', () => ({
  ModeToggle: () => <div data-testid='mode-toggle'>Mode Toggle</div>,
}));

// Mock next-themes
vi.mock('next-themes', () => ({
  useTheme: () => ({
    theme: 'light',
  }),
}));

// Mock next/link
vi.mock('next/link', () => ({
  default: ({
    children,
    ...props
  }: React.PropsWithChildren<Record<string, unknown>>) => (
    <a {...props}>{children}</a>
  ),
}));

describe('Header', () => {
  it('should render the header with logo text', () => {
    render(<Header />);

    expect(screen.getByText('Emoji Map')).toBeInTheDocument();
  });

  it('should render the mode toggle', () => {
    render(<Header />);

    expect(screen.getByTestId('mode-toggle')).toBeInTheDocument();
  });

  it('should have the correct styling', () => {
    render(<Header />);

    const header = screen.getByRole('banner');
    expect(header).toHaveClass('flex');
    expect(header).toHaveClass('justify-between');
    expect(header).toHaveClass('items-center');
    expect(header).toHaveClass('border-b');
    expect(header).toHaveClass('sticky');
  });
});
