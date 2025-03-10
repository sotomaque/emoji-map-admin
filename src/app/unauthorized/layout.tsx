import { Footer } from '@/components/footer/footer';
import { Header } from '@/components/header/header';
import { isAuthorizedAdmin } from '@/utils/auth';
import { redirect } from 'next/navigation';

export default async function UnauthorizedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (await isAuthorizedAdmin()) {
    redirect('/admin');
  }

  return (
    <>
      <Header />
      <main className='flex-1 flex flex-col'>{children}</main>
      <Footer />
    </>
  );
}
