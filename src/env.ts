import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    // CLERK
    CLERK_SECRET_KEY: z.string().min(1),
    CLERK_EMOJIMAP_ORG_ID: z.string().min(1),
  },
  client: {
    // CLERK
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().min(1),

    // SHARED
    NEXT_PUBLIC_UPSTASH_PROJECT_URL: z.string().url(),
    NEXT_PUBLIC_SUPABASE_PROJECT_URL: z.string().url(),

    // iOS
    NEXT_PUBLIC_APP_STORE_CONNECT_URL: z.string().url(),
    NEXT_PUBLIC_IOS_GITHUB_URL: z.string().url(),

    // WEB
    NEXT_PUBLIC_WEB_VERCEL_PROJECT_URL: z.string().url(),
    NEXT_PUBLIC_WEB_GITHUB_URL: z.string().url(),
    NEXT_PUBLIC_WEB_URL: z.string().url(),

    // ADMIN
    NEXT_PUBLIC_ADMIN_VERCEL_PROJECT_URL: z.string().url(),
    NEXT_PUBLIC_ADMIN_APP_GITHUB_URL: z.string().url(),
    NEXT_PUBLIC_ADMIN_URL: z.string().url(),
  },
  runtimeEnv: {
    // CLERK
    CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY:
      process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
    CLERK_EMOJIMAP_ORG_ID: process.env.CLERK_EMOJIMAP_ORG_ID,

    // SHARED
    NEXT_PUBLIC_UPSTASH_PROJECT_URL:
      process.env.NEXT_PUBLIC_UPSTASH_PROJECT_URL,
    NEXT_PUBLIC_SUPABASE_PROJECT_URL:
      process.env.NEXT_PUBLIC_SUPABASE_PROJECT_URL,

    // iOS
    NEXT_PUBLIC_APP_STORE_CONNECT_URL:
      process.env.NEXT_PUBLIC_APP_STORE_CONNECT_URL,
    NEXT_PUBLIC_IOS_GITHUB_URL: process.env.NEXT_PUBLIC_IOS_GITHUB_URL,

    // WEB
    NEXT_PUBLIC_WEB_VERCEL_PROJECT_URL:
      process.env.NEXT_PUBLIC_WEB_VERCEL_PROJECT_URL,
    NEXT_PUBLIC_WEB_GITHUB_URL: process.env.NEXT_PUBLIC_WEB_GITHUB_URL,
    NEXT_PUBLIC_WEB_URL: process.env.NEXT_PUBLIC_WEB_URL,

    // ADMIN
    NEXT_PUBLIC_ADMIN_VERCEL_PROJECT_URL:
      process.env.NEXT_PUBLIC_ADMIN_VERCEL_PROJECT_URL,
    NEXT_PUBLIC_ADMIN_APP_GITHUB_URL:
      process.env.NEXT_PUBLIC_ADMIN_APP_GITHUB_URL,
    NEXT_PUBLIC_ADMIN_URL: process.env.NEXT_PUBLIC_ADMIN_URL,
  },
});
