import { EnvironmentIndicator, NotLoggedIn } from '@/components';

export default function RootNotLoggedInLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <NotLoggedIn.Container>
      <EnvironmentIndicator />
      <NotLoggedIn.HeaderLogo />
      {children}
      <NotLoggedIn.FooterWaves />
    </NotLoggedIn.Container>
  );
}
