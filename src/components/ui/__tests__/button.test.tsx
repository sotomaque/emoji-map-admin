import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '../button';
import Link from 'next/link';

// Mock the Slot component
vi.mock('@radix-ui/react-slot', () => ({
  Slot: ({
    children,
    ...props
  }: React.PropsWithChildren<Record<string, unknown>>) => (
    <div data-testid='slot' {...props}>
      {children}
    </div>
  ),
}));

describe('Button', () => {
  it('should render children correctly', () => {
    render(<Button>Click me</Button>);

    expect(screen.getByRole('button')).toHaveTextContent('Click me');
  });

  it('should apply default variant and size classes', () => {
    render(<Button>Default Button</Button>);

    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-primary');
    expect(button).toHaveClass('text-primary-foreground');
    expect(button).toHaveClass('h-9'); // default size
  });

  it('should apply different variant classes', () => {
    render(<Button variant='destructive'>Destructive Button</Button>);

    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-destructive');
    expect(button).toHaveClass('text-destructive-foreground');
  });

  it('should apply different size classes', () => {
    render(<Button size='sm'>Small Button</Button>);

    const button = screen.getByRole('button');
    expect(button).toHaveClass('h-8');
    expect(button).toHaveClass('rounded-md');
    expect(button).toHaveClass('px-3');
  });

  it('should render as a child component when asChild is true', () => {
    render(
      <Button asChild>
        <Link href='/test'>Link Button</Link>
      </Button>
    );

    expect(screen.getByTestId('slot')).toBeInTheDocument();
    expect(screen.getByTestId('slot')).toHaveTextContent('Link Button');
  });

  it('should handle click events', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();

    render(<Button onClick={handleClick}>Clickable Button</Button>);

    const button = screen.getByRole('button');
    await user.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should be disabled when disabled prop is true', () => {
    render(<Button disabled>Disabled Button</Button>);

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveClass('disabled:opacity-50');
  });
});
