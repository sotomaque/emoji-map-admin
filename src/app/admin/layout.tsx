import { isAuthorizedAdmin } from '@/utils/auth';
import { redirect } from 'next/navigation';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (!(await isAuthorizedAdmin())) {
    redirect('/unauthorized');
  }

  return <>{children}</>;
}
