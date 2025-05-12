'use client';

import {
  ChevronsUpDown,
  CreditCard,
  LogOut,
  NotebookPen,
  SquareUser
} from 'lucide-react';

import { redirectFromClient } from '@/actions/navigation';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from '@/components/ui/sidebar';
import { ROUTES } from '@/routes';
import Link from 'next/link';
import { NavUserViewProps } from './nav-user.types';

export function NavUserView({ model }: NavUserViewProps) {
  const { user, isMobile, open, getInitials, onItemClick, setOpen } = model;

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu open={open} onOpenChange={(state) => setOpen(state)}>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
              onClick={() => setOpen(!open)}
            >
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage src={user?.picture} alt={user?.name} />
                <AvatarFallback className="rounded-lg bg-blue-100">
                  {getInitials(user?.name)}
                </AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{user?.name}</span>
                <span className="truncate text-xs">{user?.email}</span>
              </div>
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            side={isMobile ? 'bottom' : 'right'}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage src={user?.picture} alt={user?.name} />
                  <AvatarFallback className="rounded-lg bg-blue-100">
                    {getInitials(user?.name)}
                  </AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">{user?.name}</span>
                  <span className="truncate text-xs">{user?.email}</span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem onClick={onItemClick}>
                <Link
                  href={`${ROUTES.PLANS.url}?tab=combo`}
                  className="flex w-full items-center gap-2"
                >
                  <NotebookPen />
                  Planos e pacotes
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem onClick={onItemClick}>
                <Link
                  href={ROUTES.ACCOUNT.url}
                  className="flex w-full items-center gap-2"
                >
                  <SquareUser />
                  Conta
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={onItemClick}>
                <Link
                  href={ROUTES.PAYMENTS.url}
                  className="flex w-full items-center gap-2"
                >
                  <CreditCard />
                  Pagamentos
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => redirectFromClient(ROUTES.SIGNOUT.url)}
            >
              <LogOut />
              Sair
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
