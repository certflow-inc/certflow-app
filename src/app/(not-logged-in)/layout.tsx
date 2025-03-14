import { NotLoggedIn } from '@/components';

export default function RootNotLoggedInLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <NotLoggedIn.Container>
      <NotLoggedIn.HeaderLogo />
      {children}
      <NotLoggedIn.FooterWaves />
    </NotLoggedIn.Container>
  );
}
