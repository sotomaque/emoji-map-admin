import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ModeToggle } from './mode-toggle';

// Mock the useTheme hook
vi.mock('next-themes', () => ({
  useTheme: () => ({
    theme: 'light',
    setTheme: vi.fn(),
  }),
}));

// Mock the UI components
vi.mock('@/components/ui/button', () => ({
  Button: ({
    children,
    ...props
  }: React.PropsWithChildren<Record<string, unknown>>) => (
    <button data-testid='mock-button' {...props}>
      {children}
    </button>
  ),
}));

vi.mock('@/components/ui/dropdown-menu', () => ({
  DropdownMenu: ({ children }: React.PropsWithChildren<unknown>) => (
    <div data-testid='dropdown-menu'>{children}</div>
  ),
  DropdownMenuTrigger: ({ children }: React.PropsWithChildren<unknown>) => (
    <div data-testid='dropdown-trigger'>{children}</div>
  ),
  DropdownMenuContent: ({ children }: React.PropsWithChildren<unknown>) => (
    <div data-testid='dropdown-content'>{children}</div>
  ),
  DropdownMenuItem: ({
    children,
    onClick,
    disabled,
  }: React.PropsWithChildren<{ onClick?: () => void; disabled?: boolean }>) => (
    <button data-testid='dropdown-item' onClick={onClick} disabled={disabled}>
      {children}
    </button>
  ),
}));

// Mock the icons with unique test IDs
vi.mock('@radix-ui/react-icons', () => ({
  MoonIcon: () => <div data-testid='moon-icon-main' />,
  SunIcon: () => <div data-testid='sun-icon-main' />,
  CheckIcon: () => <div data-testid='check-icon' />,
  DesktopIcon: () => <div data-testid='desktop-icon' />,
}));

describe('ModeToggle', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render the toggle button', () => {
    render(<ModeToggle />);

    expect(screen.getByTestId('mode-toggle')).toBeInTheDocument();
    // Use getAllByTestId for elements that appear multiple times
    expect(screen.getAllByTestId('sun-icon-main').length).toBeGreaterThan(0);
    expect(screen.getAllByTestId('moon-icon-main').length).toBeGreaterThan(0);
  });

  it('should render the dropdown menu', () => {
    render(<ModeToggle />);

    expect(screen.getByTestId('dropdown-menu')).toBeInTheDocument();
    expect(screen.getByTestId('dropdown-trigger')).toBeInTheDocument();
    expect(screen.getByTestId('dropdown-content')).toBeInTheDocument();
  });

  it('should render theme options', () => {
    render(<ModeToggle />);

    const items = screen.getAllByTestId('dropdown-item');
    expect(items.length).toBe(3); // Light, Dark, System
  });
});
