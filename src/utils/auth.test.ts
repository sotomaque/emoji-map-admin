import { describe, it, expect, vi } from 'vitest';
import { isAuthorizedAdmin } from './auth';
import type { MockSessionClaims } from '@/test/mocks';

// Mock the env module
vi.mock('@/env', () => ({
  env: {
    CLERK_EMOJIMAP_ORG_ID: 'test-org-id',
  },
}));

// Mock the constants module
vi.mock('@/constants/clerk', () => ({
  CLERK_ADMIN_ROLE: 'org:admin',
}));

describe('isAuthorizedAdmin', () => {
  it('should return false if sessionClaims is null', () => {
    expect(isAuthorizedAdmin(null)).toBe(false);
  });

  it('should return false if sessionClaims is undefined', () => {
    expect(isAuthorizedAdmin(undefined)).toBe(false);
  });

  it('should return false if org_id does not match', () => {
    const sessionClaims: MockSessionClaims = {
      org_id: 'wrong-org-id',
      org_role: 'org:admin',
    };
    expect(isAuthorizedAdmin(sessionClaims)).toBe(false);
  });

  it('should return false if org_role is not admin', () => {
    const sessionClaims: MockSessionClaims = {
      org_id: 'test-org-id',
      org_role: 'org:member',
    };
    expect(isAuthorizedAdmin(sessionClaims)).toBe(false);
  });

  it('should return false if org_id is missing', () => {
    const sessionClaims: MockSessionClaims = {
      org_role: 'org:admin',
    };
    expect(isAuthorizedAdmin(sessionClaims)).toBe(false);
  });

  it('should return false if org_role is missing', () => {
    const sessionClaims: MockSessionClaims = {
      org_id: 'test-org-id',
    };
    expect(isAuthorizedAdmin(sessionClaims)).toBe(false);
  });

  it('should return true if user is an admin in the correct organization', () => {
    const sessionClaims: MockSessionClaims = {
      org_id: 'test-org-id',
      org_role: 'org:admin',
    };
    expect(isAuthorizedAdmin(sessionClaims)).toBe(true);
  });
});
