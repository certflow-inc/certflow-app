import { SidebarProvider } from '@/components/ui/sidebar';

export const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return <SidebarProvider>{children}</SidebarProvider>;
};
