'use client';
import {
  AudioWaveform,
  Command,
  GalleryVerticalEnd,
  Settings,
  Wallpaper
} from 'lucide-react';
import * as React from 'react';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail
} from '@/components/ui/sidebar';
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
      icon: Wallpaper,
      isActive: false,
      items: [
        {
          title: 'Dashboard',
          url: '/dashboard'
        },
        {
          title: 'Sobre',
          url: '/about'
        }
      ]
    },
    {
      title: 'Outros',
      url: '#',
      icon: Wallpaper,
      isActive: false,
      items: [
        {
          title: 'Outros1',
          url: '#'
        },
        {
          title: 'Outros2',
          url: '#'
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
          url: '#'
        },
        {
          title: 'Usuários',
          url: '#'
        },
        {
          title: 'Planos',
          url: '#'
        },
        {
          title: 'Pagamentos',
          url: '#'
        }
      ]
    }
  ]
  // projects: [
  //   {
  //     name: 'Design Engineering',
  //     url: '#',
  //     icon: Frame
  //   },
  //   {
  //     name: 'Sales & Marketing',
  //     url: '#',
  //     icon: PieChart
  //   },
  //   {
  //     name: 'Travel',
  //     url: '#',
  //     icon: Map
  //   }
  // ]
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
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
