import { describe, it, expect, vi, beforeEach } from 'vitest';
import RootPage from './page';
import { isAuthorizedAdmin } from '@/utils/auth';
import type { MockAuthReturn } from '@/test/mocks';

// Import the modules we'll mock
import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs/server';

// Mock the env module
vi.mock('@/env', () => ({
  env: {
    CLERK_EMOJIMAP_ORG_ID: 'test-org-id',
  },
}));

// Mock the next/navigation module
vi.mock('next/navigation', () => ({
  redirect: vi.fn(),
}));

// Mock the auth function
vi.mock('@clerk/nextjs/server', () => ({
  auth: vi.fn(),
}));

// Mock the isAuthorizedAdmin utility
vi.mock('@/utils/auth', () => ({
  isAuthorizedAdmin: vi.fn(),
}));

describe('RootPage', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should redirect to unauthorized page if user is not signed in', async () => {
    // Mock auth to return null session claims
    const mockAuthReturn: MockAuthReturn = { sessionClaims: null };
    // @ts-expect-error - We're mocking the auth function with a simplified return type
    vi.mocked(auth).mockResolvedValue(mockAuthReturn);

    // Call the component
    await RootPage();

    // Check that redirect was called with the correct path
    expect(redirect).toHaveBeenCalledWith('/unauthorized');
  });

  it('should redirect to admin page if user is an admin', async () => {
    // Mock auth to return admin session claims
    const mockAuthReturn: MockAuthReturn = {
      sessionClaims: {
        org_id: 'test-org-id',
        org_role: 'org:admin',
      },
    };
    // @ts-expect-error - We're mocking the auth function with a simplified return type
    vi.mocked(auth).mockResolvedValue(mockAuthReturn);

    // Mock isAuthorizedAdmin to return true
    vi.mocked(isAuthorizedAdmin).mockReturnValue(true);

    // Call the component
    await RootPage();

    // Check that redirect was called with the correct path
    expect(redirect).toHaveBeenCalledWith('/admin');
  });

  it('should redirect to unauthorized page if user is not an admin', async () => {
    // Mock auth to return non-admin session claims
    const mockAuthReturn: MockAuthReturn = {
      sessionClaims: {
        org_id: 'wrong-org-id',
        org_role: 'org:member',
      },
    };
    // @ts-expect-error - We're mocking the auth function with a simplified return type
    vi.mocked(auth).mockResolvedValue(mockAuthReturn);

    // Mock isAuthorizedAdmin to return false
    vi.mocked(isAuthorizedAdmin).mockReturnValue(false);

    // Call the component
    await RootPage();

    // Check that redirect was called with the correct path
    expect(redirect).toHaveBeenCalledWith('/unauthorized');
  });
});
