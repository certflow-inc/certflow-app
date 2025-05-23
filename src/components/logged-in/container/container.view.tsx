'use client';

import { Separator } from '@/components/ui/separator';
import { SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';
import { RouteKeys, ROUTES } from '@/routes';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import { Breadcrumb } from './breadcrumb';
import { ContainerViewProps } from './container.types';

export function ContainerView({
  children,
  className,
  ...props
}: ContainerViewProps) {
  const pathname = usePathname();

  const breadcrumb = useMemo(() => {
    const key = pathname
      .split('/')
      .map((item) => item.toUpperCase())
      .join('_')
      .replace(/^_/, '');

    const route = ROUTES[key as RouteKeys];
    return route.breadcrumbs ?? [];
  }, [pathname]);

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

      <div className="flex flex-1 flex-col gap-4 bg-white p-4">
        <div className="flex-1 rounded-xl bg-blue-100 p-2">{children}</div>
      </div>
    </SidebarInset>
  );
}
