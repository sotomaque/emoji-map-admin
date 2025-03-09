import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import { ThemeProvider } from '../theme-provider';

// Mock next-themes
vi.mock('next-themes', () => ({
  ThemeProvider: ({
    children,
    ...props
  }: {
    children: React.ReactNode;
    [key: string]: unknown;
  }) => (
    <div data-testid='mock-theme-provider' data-props={JSON.stringify(props)}>
      {children}
    </div>
  ),
}));

describe('ThemeProvider', () => {
  it('should render children', () => {
    const { getByText } = render(
      <ThemeProvider>
        <div>Test Child</div>
      </ThemeProvider>
    );

    expect(getByText('Test Child')).toBeInTheDocument();
  });

  it('should pass props to the next-themes provider', () => {
    const { getByTestId } = render(
      <ThemeProvider attribute='class' defaultTheme='dark' enableSystem>
        <div>Test Child</div>
      </ThemeProvider>
    );

    const mockProvider = getByTestId('mock-theme-provider');
    const props = JSON.parse(mockProvider.getAttribute('data-props') || '{}');

    expect(props.attribute).toBe('class');
    expect(props.defaultTheme).toBe('dark');
    expect(props.enableSystem).toBe(true);
  });
});
