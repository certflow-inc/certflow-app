import { SidebarProvider } from '@/components/ui/sidebar';
import { SessionProvider } from './session-provider';

export const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <SidebarProvider>{children}</SidebarProvider>
    </SessionProvider>
  );
};
