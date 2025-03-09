'use client';

import { SignedIn, UserButton } from '@clerk/nextjs';
import { ModeToggle } from './mode-toggle';
import Link from 'next/link';
import { Logo } from './logo';
import { dark } from '@clerk/themes';
import { useTheme } from 'next-themes';

export function Header() {
  const { theme } = useTheme();

  return (
    <header className='flex justify-between items-center p-4 gap-4 h-16 border-b border-purple-500/20 dark:border-white/10 bg-white/80 dark:bg-black/50 backdrop-blur-md sticky top-0 z-10 shadow-[0_0_15px_rgba(79,70,229,0.2)] dark:shadow-[0_0_15px_rgba(79,70,229,0.3)]'>
      <div className='container flex items-center justify-between h-16'>
        <Link href='/' aria-label='Home page' className='py-2'>
          <Logo />
        </Link>
        <div className='flex items-center gap-4'>
          <ModeToggle />
          <SignedIn>
            <UserButton
              appearance={{
                baseTheme: theme === 'dark' ? dark : undefined,
                elements: {
                  avatarBox:
                    'border-2 border-purple-500 hover:border-cyan-400 transition-colors',
                },
              }}
            />
          </SignedIn>
        </div>
      </div>
    </header>
  );
}
