import { expect, afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';

// Extend Vitest's expect method with methods from react-testing-library
expect.extend(matchers);

// Run cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
});

// Mock environment variables
process.env.CLERK_EMOJIMAP_ORG_ID = 'test-org-id';
process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY = 'test-publishable-key';
process.env.CLERK_SECRET_KEY = 'test-secret-key';

// Global mock for @/env module
vi.mock('@/env', () => ({
  env: {
    CLERK_EMOJIMAP_ORG_ID: 'test-org-id',
    // Add other required env variables with mock values
    NEXT_PUBLIC_UPSTASH_PROJECT_URL: 'https://test-upstash.com',
    NEXT_PUBLIC_SUPABASE_PROJECT_URL: 'https://test-supabase.com',
    NEXT_PUBLIC_APP_STORE_CONNECT_URL: 'https://test-appstore.com',
    NEXT_PUBLIC_IOS_GITHUB_URL: 'https://test-ios-github.com',
    NEXT_PUBLIC_WEB_VERCEL_PROJECT_URL: 'https://test-web-vercel.com',
    NEXT_PUBLIC_WEB_GITHUB_URL: 'https://test-web-github.com',
    NEXT_PUBLIC_WEB_URL: 'https://test-web.com',
    NEXT_PUBLIC_ADMIN_VERCEL_PROJECT_URL: 'https://test-admin-vercel.com',
    NEXT_PUBLIC_ADMIN_APP_GITHUB_URL: 'https://test-admin-github.com',
    NEXT_PUBLIC_ADMIN_URL: 'https://test-admin.com',
  },
}));
