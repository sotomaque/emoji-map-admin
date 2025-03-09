'use client';

import { CyberpunkParticles } from '@/components/effects/cyberpunk-particles';
import { CyberpunkButton } from '@/components/ui/cyberpunk-button';

export default function AdminDashboard() {
  return (
    <div className='flex-1 w-full relative overflow-hidden'>
      {/* Cyberpunk background */}
      <div className='absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-blue-900 dark:via-purple-900 dark:to-pink-800 z-0'>
        {/* Grid overlay */}
        <div className='absolute inset-0 bg-[linear-gradient(to_right,rgba(79,70,229,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(79,70,229,0.1)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] cyberpunk-grid'></div>

        {/* Scanlines */}
        <div className='cyberpunk-scanline opacity-30 dark:opacity-100'></div>
        <div
          className='cyberpunk-scanline opacity-30 dark:opacity-100'
          style={{ top: '30%', animationDelay: '-2s' }}
        ></div>
        <div
          className='cyberpunk-scanline opacity-30 dark:opacity-100'
          style={{ top: '60%', animationDelay: '-5s' }}
        ></div>

        {/* Glowing orbs */}
        <div className='absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500/10 dark:bg-blue-500/20 blur-3xl cyberpunk-orb'></div>
        <div
          className='absolute bottom-1/4 right-1/3 w-96 h-96 rounded-full bg-purple-500/10 dark:bg-purple-500/20 blur-3xl cyberpunk-orb'
          style={{ animationDelay: '-2s' }}
        ></div>
        <div
          className='absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-pink-500/10 dark:bg-pink-500/20 blur-3xl cyberpunk-orb'
          style={{ animationDelay: '-4s' }}
        ></div>

        {/* Particle effect */}
        <CyberpunkParticles />
      </div>

      {/* Content */}
      <div className='relative z-10 p-4 md:p-8'>
        <div className='max-w-4xl mx-auto'>
          <div className='bg-white/90 dark:bg-card/80 backdrop-blur-md text-card-foreground shadow-lg rounded-lg p-6 border border-purple-200 dark:border-white/10'>
            <h2 className='text-2xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-700 dark:from-blue-400 dark:to-purple-500'>
              Welcome to the Admin Dashboard
            </h2>
            <p className='mb-4 text-gray-700 dark:text-gray-200'>
              This dashboard is restricted to administrators of the EmojiMap
              organization.
            </p>
            <p className='mb-4 text-gray-700 dark:text-gray-200'>
              As an admin, you can manage the EmojiMap application, including:
            </p>
            <ul className='list-disc pl-6 mb-6 space-y-3'>
              <li className='text-cyan-600 dark:text-cyan-300'>
                Managing emoji submissions
              </li>
              <li className='text-purple-600 dark:text-purple-300'>
                Reviewing user reports
              </li>
              <li className='text-pink-600 dark:text-pink-300'>
                Configuring application settings
              </li>
              <li className='text-blue-600 dark:text-blue-300'>
                Viewing analytics and statistics
              </li>
            </ul>
            <p className='text-gray-500 dark:text-muted-foreground mb-6'>
              Use the navigation menu to access different sections of the admin
              dashboard.
            </p>

            <div className='flex flex-wrap gap-4'>
              <CyberpunkButton variant='primary' glowing>
                Manage Submissions
              </CyberpunkButton>
              <CyberpunkButton variant='secondary' glowing>
                View Reports
              </CyberpunkButton>
              <CyberpunkButton variant='outline'>Settings</CyberpunkButton>
              <CyberpunkButton variant='danger'>
                Critical Alerts
              </CyberpunkButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
