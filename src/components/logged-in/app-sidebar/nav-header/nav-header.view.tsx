'use client';

import logo from '../../../../../public/images/logo_large.svg';

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar
} from '@/components/ui/sidebar';
import Image from 'next/image';

export function NavHeader() {
  const { state } = useSidebar();

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          <div
            data-state={state}
            className="text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg data-[state=expanded]:size-18"
          >
            <Image
              priority
              width={80}
              draggable={false}
              quality={100}
              src={logo}
              alt="CertFlow Logo"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-medium">Cert Flow</span>
            <span className="truncate text-xs">Certificados on-liine</span>
          </div>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
