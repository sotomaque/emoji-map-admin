'use client';

import * as React from 'react';
import {
  BookOpen,
  Bot,
  Frame,
  LifeBuoy,
  Map,
  PieChart,
  Send,
  Settings2,
  SquareTerminal,
} from 'lucide-react';

import { NavMain } from '@/components/nav-main';
import { NavProjects } from '@/components/nav-projects';
import { NavSecondary } from '@/components/nav-secondary';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import Image from 'next/image';
import { UserButton } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import { useTheme } from 'next-themes';
import { ModeToggle } from './mode-toggle/mode-toggle';

const data = {
  user: {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg',
  },
  navMain: [
    {
      title: 'Third Party Services',
      url: '#',
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: 'Vercel',
          description: 'webhosting',
          url: '#',
        },
        {
          title: 'Github',
          description: 'source control',
          url: '#',
        },
        {
          title: 'Supabase',
          description: 'database',
          url: '#',
        },
        {
          title: 'Upstash',
          description: 'redis cache',
          url: '#',
        },
        {
          title: 'Clerk',
          description: 'authentication',
          url: '#',
        },
        {
          title: 'Linear',
          description: 'project management',
          url: '#',
        },
      ],
    },
    {
      title: 'Stats',
      url: '#',
      icon: Bot,
      items: [
        {
          title: 'Web Traffic',
          url: '#',
        },
        {
          title: 'iOS App Downloads',
          url: '#',
        },
      ],
    },
    {
      title: 'Documentation',
      url: '#',
      icon: BookOpen,
      items: [
        {
          title: 'Introduction',
          url: '#',
        },
        {
          title: 'Get Started',
          url: '#',
        },
        {
          title: 'Tutorials',
          url: '#',
        },
        {
          title: 'Changelog',
          url: '#',
        },
      ],
    },
    {
      title: 'Settings',
      url: '#',
      icon: Settings2,
      items: [
        {
          title: 'General',
          url: '#',
        },
        {
          title: 'Team',
          url: '#',
        },
        {
          title: 'Billing',
          url: '#',
        },
        {
          title: 'Limits',
          url: '#',
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: 'Support',
      url: '#',
      icon: LifeBuoy,
    },
    {
      title: 'Feedback',
      url: '#',
      icon: Send,
    },
  ],
  projects: [
    {
      name: 'Design Engineering',
      url: '#',
      icon: Frame,
    },
    {
      name: 'Sales & Marketing',
      url: '#',
      icon: PieChart,
    },
    {
      name: 'Travel',
      url: '#',
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { theme } = useTheme();

  return (
    <Sidebar variant='inset' {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <div className='flex items-center gap-2'>
              <div className='flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground'>
                <Image
                  src='/logo.png'
                  alt='EmojiMap'
                  width={32}
                  height={32}
                  className='rounded-lg'
                />
              </div>
              <div className='grid flex-1 text-left text-sm leading-tight'>
                <span className='truncate font-semibold'>EmojiMap</span>
                <span className='truncate text-xs'>Admin</span>
              </div>
              <ModeToggle />
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
        <NavSecondary items={data.navSecondary} className='mt-auto' />
      </SidebarContent>
      <SidebarFooter>
        <UserButton
          appearance={{
            baseTheme: theme === 'dark' ? dark : undefined,
            elements: {
              avatarBox:
                'border-2 border-purple-500 hover:border-cyan-400 transition-colors',
            },
          }}
        />
      </SidebarFooter>
    </Sidebar>
  );
}
