import { Separator } from '@/components/ui/separator';
import { SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';
import { Breadcrumb } from './breadcrumb';
import { ContainerViewProps } from './container.types';

export function ContainerView({
  children,
  breadcrumb,
  className,
  ...props
}: ContainerViewProps) {
  return (
    <SidebarInset className={cn(className)} {...props}>
      <header className="bg-sidebar sticky top-0 flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />

          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />

          <Breadcrumb data={breadcrumb} />
        </div>
      </header>

      <div className="flex flex-1 flex-col gap-4 bg-white p-4">{children}</div>
    </SidebarInset>
  );
}
