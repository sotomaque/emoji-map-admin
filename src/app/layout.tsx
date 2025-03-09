import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Header } from '@/components/header/header';
import { cn } from '@/lib/utils';

const fontSans = FontSans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'EmojiMap Admin',
  description: 'Admin dashboard for EmojiMap',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <link rel='icon' href='/favicon.ico' />
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased overscroll-none flex flex-col',
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <ClerkProvider>
            <Header />
            <main>{children}</main>
          </ClerkProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
