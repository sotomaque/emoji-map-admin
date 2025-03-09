import { CLERK_ADMIN_ROLE } from '@/constants/clerk';
import { env } from '@/env';

// Define the session claims type based on what we need
type SessionClaims = {
  org_id?: string;
  org_role?: string;
};

/**
 * Checks if a user is an authorized admin based on their session claims
 * @param sessionClaims The session claims from Clerk auth
 * @returns True if the user is an admin in the EmojiMap organization, false otherwise
 */
export function isAuthorizedAdmin(
  sessionClaims: SessionClaims | null | undefined
): boolean {
  if (!sessionClaims) return false;

  const isInOrg = sessionClaims.org_id === env.CLERK_EMOJIMAP_ORG_ID;
  const isAdmin = sessionClaims.org_role === CLERK_ADMIN_ROLE;

  return isInOrg && isAdmin;
}
