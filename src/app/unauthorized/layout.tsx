import { isAuthorizedAdmin } from '@/utils/roles';
import { redirect } from 'next/navigation';

export default async function UnauthorizedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (await isAuthorizedAdmin()) {
    redirect('/admin');
  }

  return <>{children}</>;
}
