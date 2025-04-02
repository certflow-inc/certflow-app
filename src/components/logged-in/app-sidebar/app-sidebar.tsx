'use client';
import {
  AudioWaveform,
  BookOpenCheck,
  Building2,
  CircleDollarSign,
  Command,
  Dock,
  GalleryVerticalEnd,
  LayoutDashboard,
  LibraryBig,
  Settings,
  Users
} from 'lucide-react';
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

// This is sample data.
const data = {
  teams: [
    {
      name: 'Acme Inc',
      logo: GalleryVerticalEnd,
      plan: 'Enterprise'
    },
    {
      name: 'Acme Corp.',
      logo: AudioWaveform,
      plan: 'Startup'
    },
    {
      name: 'Evil Corp.',
      logo: Command,
      plan: 'Free'
    }
  ],
  navMain: [
    {
      title: 'Geral',
      url: '#',
      icon: Dock,
      isActive: false,
      items: [
        {
          title: 'Dashboard',
          url: '/dashboard',
          icon: LayoutDashboard
        },
        {
          title: 'Sobre',
          url: '/about',
          icon: LibraryBig
        }
      ]
    },
    {
      title: 'Configurações',
      url: '#',
      icon: Settings,
      items: [
        {
          title: 'Empresa',
          url: '#',
          icon: Building2
        },
        {
          title: 'Usuários',
          url: '#',
          icon: Users
        },
        {
          title: 'Planos',
          url: '#',
          icon: BookOpenCheck
        },
        {
          title: 'Pagamentos',
          url: '#',
          icon: CircleDollarSign
        }
      ]
    }
  ]
};

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
        <NavMain items={data.navMain} />
      </SidebarContent>

      <SidebarFooter>
        <NavUser />
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
