import { isAuthorizedAdmin } from '@/utils/roles';
import { redirect } from 'next/navigation';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin Dashboard | EmojiMap',
  description: 'EmojiMap administration dashboard',
};

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (!isAuthorizedAdmin()) {
    redirect('/unauthorized');
  }

  return <>{children}</>;
}
