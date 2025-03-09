import { expect, afterEach } from 'vitest';
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
