'use client';

import {
  SignInButton,
} from '@clerk/nextjs';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { dark } from '@clerk/themes';
import Image from 'next/image';
import { CyberpunkParticles } from '@/components/effects/cyberpunk-particles';

export default function UnauthorizedPage() {
  const { theme } = useTheme();

  return (
    <div className="w-full h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Cyberpunk background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-blue-900 dark:via-purple-900 dark:to-pink-800 z-0">
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(79,70,229,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(79,70,229,0.1)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] cyberpunk-grid"></div>

        {/* Scanlines */}
        <div className="cyberpunk-scanline opacity-30 dark:opacity-100"></div>
        <div className="cyberpunk-scanline opacity-30 dark:opacity-100" style={{ top: '30%', animationDelay: '-2s' }}></div>
        <div className="cyberpunk-scanline opacity-30 dark:opacity-100" style={{ top: '60%', animationDelay: '-5s' }}></div>

        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500/10 dark:bg-blue-500/20 blur-3xl cyberpunk-orb"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 rounded-full bg-purple-500/10 dark:bg-purple-500/20 blur-3xl cyberpunk-orb" style={{ animationDelay: '-2s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-pink-500/10 dark:bg-pink-500/20 blur-3xl cyberpunk-orb" style={{ animationDelay: '-4s' }}></div>

        {/* Particle effect */}
        <CyberpunkParticles />
      </div>

      {/* Content */}
      <div className="max-w-md w-full mx-auto bg-white/90 dark:bg-card/80 backdrop-blur-md text-card-foreground rounded-lg shadow-lg border border-purple-200 dark:border-white/10 p-6 z-10 overflow-hidden">
        <div className="flex flex-col items-center mb-8">
          <div className={`relative flex items-center justify-center mb-4`}>
            <Image
              src="/logo-blur.png"
              alt="EmojiMap Logo"
              width={140}
              height={140}
              className="rounded-xl"
              priority
            />
          </div>
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-700 dark:from-blue-400 dark:to-purple-500">Admin Access Required</h1>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Access Requirements</h2>
          <p className="mb-4 text-gray-700 dark:text-gray-200">
            The EmojiMap Admin Dashboard is restricted to administrators only.
            To access this application, you need:
          </p>
          <ul className="list-disc text-left pl-6 mb-4 space-y-2 text-gray-700 dark:text-gray-200">
            <li>To be a member of the EmojiMap organization</li>
            <li>To have the <code className="bg-gray-100 dark:bg-muted/80 px-1 py-0.5 rounded text-sm">org:admin</code> role in the organization</li>
          </ul>
          <p className="text-sm text-gray-500 dark:text-muted-foreground italic">
            If you believe you&apos;ve been redirected here inadvertently or
            should have admin access, please contact an EmojiMap administrator.
          </p>
        </div>

        <div className="flex justify-center gap-4">
          <Link
            href="https://emoji-map-next.vercel.app"
            className="px-4 py-2 border border-purple-300 dark:border-white/20 rounded-md hover:bg-purple-50 dark:hover:bg-white/10 transition-colors text-purple-700 dark:text-white"
          >
            Return to EmojiMap
          </Link>

          <SignInButton mode="modal" withSignUp={false} appearance={{
            baseTheme: theme === 'dark' ? dark : undefined,
          }}>
            <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 dark:from-blue-500 dark:to-purple-600 dark:hover:from-blue-600 dark:hover:to-purple-700 text-white rounded-md transition-colors shadow-[0_0_15px_rgba(79,70,229,0.3)] dark:shadow-[0_0_15px_rgba(79,70,229,0.5)]">
              Sign In
            </button>
          </SignInButton>
        </div>
      </div>
    </div>
  );
}
