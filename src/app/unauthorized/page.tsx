'use client';

import {
  SignedIn,
  SignedOut,
  SignInButton,
  useOrganization,
  UserButton,
} from '@clerk/nextjs';
import Link from 'next/link';

export default function UnauthorizedPage() {
  const { organization } = useOrganization();

  return (
    <div className='flex flex-col items-center justify-center min-h-screen p-4 text-center'>
      <div className='max-w-2xl mx-auto'>
        <h1 className='text-4xl font-bold mb-6'>Admin Access Required</h1>

        <SignedIn>
          <div className='mb-8 flex flex-col items-center'>
            <UserButton />
            <p className='mt-4 text-lg'>
              You&apos;re signed in, but you don&apos;t have admin permissions.
            </p>
            {organization && (
              <p className='mt-2 text-sm text-gray-600'>
                Current organization: {organization.name}
              </p>
            )}
          </div>
        </SignedIn>

        <SignedOut>
          <div className='mb-8'>
            <p className='text-lg mb-4'>
              You need to sign in with an admin account to access this
              application.
            </p>
            <SignInButton mode='modal'>
              <button className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors'>
                Sign In
              </button>
            </SignInButton>
            <p className='mt-2 text-sm text-gray-500'>
              After signing in, you&apos;ll be redirected to the admin dashboard
              if you have the right permissions.
            </p>
          </div>
        </SignedOut>

        <div className='bg-white p-6 rounded-lg shadow-md mb-8'>
          <h2 className='text-2xl font-semibold mb-4'>Access Requirements</h2>
          <p className='mb-4'>
            The EmojiMap Admin Dashboard is restricted to administrators only.
            To access this application, you need:
          </p>
          <ul className='list-disc text-left pl-6 mb-4 space-y-2'>
            <li>To be a member of the EmojiMap organization</li>
          </ul>
          <p className='text-sm text-gray-600 italic'>
            If you believe you&apos;ve been redirected here inadvertently or
            should have admin access, please contact an EmojiMap administrator.
          </p>
        </div>

        <div className='flex justify-center gap-4'>
          <Link
            href='https://emoji-map-next.vercel.app'
            className='px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 transition-colors'
          >
            Return to EmojiMap
          </Link>
          <a
            href='mailto:admin@emojimap.app'
            className='px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 transition-colors'
          >
            Contact Admin
          </a>
        </div>
      </div>
    </div>
  );
}
