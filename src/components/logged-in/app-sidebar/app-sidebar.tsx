'use client';
import * as React from 'react';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail
} from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';
import { NavHeader } from './nav-header';
import { NavMain } from './nav-main';
import { NavUser } from './nav-user';

export function AppSidebar({
  className,
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      collapsible="icon"
      className={cn('bg-blue-50', className)}
      {...props}
    >
      <SidebarHeader className="border border-b-blue-50 pb-2">
        <NavHeader />
      </SidebarHeader>

      <SidebarContent>
        <NavMain />
      </SidebarContent>

      <SidebarFooter>
        <NavUser />
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
