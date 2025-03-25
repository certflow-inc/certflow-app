import { EnvironmentIndicator } from '@/components';

export default function RootLoggedInLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <EnvironmentIndicator />
      {children}
    </>
  );
}
