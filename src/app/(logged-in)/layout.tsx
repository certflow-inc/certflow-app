import { EnvironmentIndicator } from '@/components';
import { AppSidebar } from '@/components/logged-in/app-sidebar/app-sidebar.view';
import { AppProviders } from '@/providers';

export default function RootLoggedInLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AppProviders>
      <EnvironmentIndicator />

      <AppSidebar />
      {children}
    </AppProviders>
  );
}
