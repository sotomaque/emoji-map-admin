import Image from 'next/image';

export function Logo() {
  return (
    <div className='flex items-center'>
      <Image
        src='/logo-no-background.png'
        alt='Emoji Map Logo'
        width={56}
        height={56}
        className='mr-3 relative'
      />
      <span className='font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500'>Emoji Map</span>
    </div>
  );
}
