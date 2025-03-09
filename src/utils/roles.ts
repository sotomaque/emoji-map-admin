import { CLERK_ADMIN_ROLE } from '@/constants/clerk';
import { env } from '@/env';
import { auth } from '@clerk/nextjs/server';

export const isAuthorizedAdmin = async () => {
  const { sessionClaims } = await auth();
  return (
    sessionClaims?.org_id === env.CLERK_EMOJIMAP_ORG_ID &&
    sessionClaims?.org_role === CLERK_ADMIN_ROLE
  );
};
