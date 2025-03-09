import { ClerkProvider } from './clerk/clerk-provider';
import { ThemeProvider } from './theme-provider/theme-provider';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <ClerkProvider>{children}</ClerkProvider>
    </ThemeProvider>
  );
}
