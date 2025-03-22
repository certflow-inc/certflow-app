import { EnvironmentIndicator } from '@/components';
import '@/lib/http-interceptor';

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
