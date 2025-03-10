import { describe, it, expect, vi, beforeEach } from 'vitest';
import { isAuthorizedAdmin } from './auth';
import { CLERK_ADMIN_ROLE } from '@/constants/clerk';
import { env } from '@/env';

// Mock the Clerk modules
vi.mock('@clerk/nextjs/server', () => {
  return {
    auth: vi.fn(),
    clerkClient: vi.fn(),
  };
});

// Import the mocked modules
import { auth, clerkClient } from '@clerk/nextjs/server';

describe('auth utils', () => {
  // Properly type the mocks
  const mockAuth = auth as unknown as ReturnType<typeof vi.fn>;
  const mockClerkClient = clerkClient as unknown as ReturnType<typeof vi.fn>;
  const mockGetOrganizationMembershipList = vi.fn();

  beforeEach(() => {
    vi.resetAllMocks();

    // Setup default mock implementations
    mockAuth.mockResolvedValue({ userId: 'test-user-id' });

    mockClerkClient.mockResolvedValue({
      users: {
        getOrganizationMembershipList: mockGetOrganizationMembershipList,
      },
    });
  });

  describe('isAuthorizedAdmin', () => {
    it('should return false when no session exists', async () => {
      // Mock no session
      mockAuth.mockResolvedValue(null);

      const result = await isAuthorizedAdmin();

      expect(result).toBe(false);
      expect(mockAuth).toHaveBeenCalledTimes(1);
      expect(mockClerkClient).not.toHaveBeenCalled();
    });

    it('should return false when session exists but no userId', async () => {
      // Mock session with no userId
      mockAuth.mockResolvedValue({ userId: null });

      const result = await isAuthorizedAdmin();

      expect(result).toBe(false);
      expect(mockAuth).toHaveBeenCalledTimes(1);
      expect(mockClerkClient).not.toHaveBeenCalled();
    });

    it('should return false when user is not in the correct organization', async () => {
      // Mock organization membership list with wrong org ID
      mockGetOrganizationMembershipList.mockResolvedValue({
        data: [
          {
            organization: { id: 'wrong-org-id' },
            role: CLERK_ADMIN_ROLE,
          },
        ],
      });

      const result = await isAuthorizedAdmin();

      expect(result).toBe(false);
      expect(mockAuth).toHaveBeenCalledTimes(1);
      expect(mockClerkClient).toHaveBeenCalledTimes(1);
      expect(mockGetOrganizationMembershipList).toHaveBeenCalledWith({
        userId: 'test-user-id',
      });
    });

    it('should return false when user is in the correct organization but not an admin', async () => {
      // Mock organization membership list with correct org ID but wrong role
      mockGetOrganizationMembershipList.mockResolvedValue({
        data: [
          {
            organization: { id: env.CLERK_EMOJIMAP_ORG_ID },
            role: 'org:member',
          },
        ],
      });

      const result = await isAuthorizedAdmin();

      expect(result).toBe(false);
      expect(mockAuth).toHaveBeenCalledTimes(1);
      expect(mockClerkClient).toHaveBeenCalledTimes(1);
      expect(mockGetOrganizationMembershipList).toHaveBeenCalledWith({
        userId: 'test-user-id',
      });
    });

    it('should return true when user is in the correct organization and is an admin', async () => {
      // Mock organization membership list with correct org ID and admin role
      mockGetOrganizationMembershipList.mockResolvedValue({
        data: [
          {
            organization: { id: env.CLERK_EMOJIMAP_ORG_ID },
            role: CLERK_ADMIN_ROLE,
          },
        ],
      });

      const result = await isAuthorizedAdmin();

      expect(result).toBe(true);
      expect(mockAuth).toHaveBeenCalledTimes(1);
      expect(mockClerkClient).toHaveBeenCalledTimes(1);
      expect(mockGetOrganizationMembershipList).toHaveBeenCalledWith({
        userId: 'test-user-id',
      });
    });

    it('should return true when user has multiple organizations including the correct one with admin role', async () => {
      // Mock organization membership list with multiple orgs including the correct one
      mockGetOrganizationMembershipList.mockResolvedValue({
        data: [
          {
            organization: { id: 'other-org-id' },
            role: 'org:member',
          },
          {
            organization: { id: env.CLERK_EMOJIMAP_ORG_ID },
            role: CLERK_ADMIN_ROLE,
          },
        ],
      });

      const result = await isAuthorizedAdmin();

      expect(result).toBe(true);
      expect(mockAuth).toHaveBeenCalledTimes(1);
      expect(mockClerkClient).toHaveBeenCalledTimes(1);
      expect(mockGetOrganizationMembershipList).toHaveBeenCalledWith({
        userId: 'test-user-id',
      });
    });
  });
});
