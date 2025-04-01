import { EnvironmentIndicator } from '@/components';
import { AppSidebar } from '@/components/logged-in/app-sidebar/app-sidebar';
import { SidebarProvider } from '@/components/ui/sidebar';

export default function RootLoggedInLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <EnvironmentIndicator />

      <SidebarProvider>
        <AppSidebar />
        {children}
      </SidebarProvider>
    </>
  );
}
