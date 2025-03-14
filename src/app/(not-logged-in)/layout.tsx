import { NotLoggedIn } from '@/components';

export default function RootNotLoggedInLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <NotLoggedIn.Container>
      <NotLoggedIn.HeaderLogo className="mb-12" />
      {children}
      <NotLoggedIn.FooterWaves />
    </NotLoggedIn.Container>
  );
}
