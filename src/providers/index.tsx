import { SidebarProvider } from '@/components/ui/sidebar';
import { ProgressProvider } from './progress-provider';

export const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <ProgressProvider>{children}</ProgressProvider>
    </SidebarProvider>
  );
};
