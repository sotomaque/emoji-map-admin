import type { Mock } from 'vitest';

// Mock types for Clerk
export type MockSessionClaims = {
  org_id?: string;
  org_role?: string;
};

export type MockAuthReturn = {
  sessionClaims: MockSessionClaims | null;
  userId?: string | null;
  orgId?: string | null;
  orgRole?: string | null;
};

export type MockOrganization = {
  id?: string;
  name?: string;
};

export type MockUseAuthReturn = {
  isLoaded: boolean;
  isSignedIn?: boolean;
  userId?: string | null;
  sessionId?: string | null;
  orgId?: string | null;
  orgRole?: string | null;
};

export type MockUseOrganizationReturn = {
  isLoaded: boolean;
  organization: MockOrganization | null;
  membership?: unknown;
};

export type MockRouterReturn = {
  push: Mock;
  back?: Mock;
  forward?: Mock;
  refresh?: Mock;
  replace?: Mock;
  prefetch?: Mock;
};
