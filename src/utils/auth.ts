import { CLERK_ADMIN_ROLE } from '@/constants/clerk';
import { env } from '@/env';
import { auth, clerkClient } from '@clerk/nextjs/server';

export const isAuthorizedAdmin = async () => {
  const session = await auth();
  const userId = session?.userId;

  if (!session || !userId) {
    return false;
  }

  const client = await clerkClient();

  if (userId) {
    const result = await client.users.getOrganizationMembershipList({ userId });

    return result.data.some(({ organization, role }) => {
      const matchesOrgId = organization.id === env.CLERK_EMOJIMAP_ORG_ID;
      const isAdmin = role === CLERK_ADMIN_ROLE;

      return matchesOrgId && isAdmin;
    });
  }
};
