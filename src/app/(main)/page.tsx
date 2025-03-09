import { isAuthorizedAdmin } from '@/utils/roles';
import { redirect } from 'next/navigation';

export default async function RootPage() {
  if (await isAuthorizedAdmin()) {
    redirect('/admin');
  } else {
    redirect('/unauthorized');
  }
}
