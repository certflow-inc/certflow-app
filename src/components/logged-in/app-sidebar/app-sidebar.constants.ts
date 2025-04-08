import { ROUTES } from '@/routes';
import {
  BookOpenCheck,
  CircleDollarSign,
  Dock,
  LayoutDashboard,
  LibraryBig,
  Settings,
  SquareUser,
  Users
} from 'lucide-react';

export const DATA = {
  navMain: [
    {
      title: 'Geral',
      url: '#',
      icon: Dock,
      isActive: false,
      items: [
        {
          title: 'Dashboard',
          url: ROUTES.DASHBOARD,
          icon: LayoutDashboard
        },
        {
          title: 'Sobre',
          url: ROUTES.ABOUT,
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
          title: 'Conta',
          url: ROUTES.ACCOUNT,
          icon: SquareUser
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
