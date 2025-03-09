import Link from 'next/link';
import { ModeToggle } from '../mode-toggle/mode-toggle';
import Image from 'next/image';

export function Header() {
  return (
    <header className='flex justify-between items-center p-4 gap-4 h-16 border-b border-purple-500/20 dark:border-white/10 bg-white/80 dark:bg-black/50 backdrop-blur-md sticky top-0 z-50 shadow-[0_0_15px_rgba(79,70,229,0.2)] dark:shadow-[0_0_15px_rgba(79,70,229,0.3)]'>
      <div className='container flex items-center justify-between h-16'>
        <Link href='/' aria-label='Home page' className='py-2'>
          <div className='flex items-center'>
            <Image
              src='/logo-no-background.png'
              alt='Emoji Map Logo'
              width={56}
              height={56}
              className='mr-3 relative'
            />
            <span className='font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500'>
              Emoji Map
            </span>
          </div>
        </Link>
        <div className='flex items-center gap-4'>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
