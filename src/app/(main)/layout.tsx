import '../globals.css';
import { Header } from '@/components/header/header';
import { Footer } from '@/components/footer/footer';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className='flex-1 flex flex-col'>{children}</main>
      <Footer />
    </>
  );
}
