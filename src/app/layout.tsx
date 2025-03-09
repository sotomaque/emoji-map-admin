import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/header/header';
import { cn } from '@/lib/utils';
import { Footer } from '@/components/footer/footer';
import { Providers } from '@/components/providers/providers';

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
          'min-h-screen bg-background font-sans antialiased flex flex-col',
          fontSans.variable
        )}
      >
        <Providers>
          <Header />
          <main className='flex-1 flex flex-col'>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
