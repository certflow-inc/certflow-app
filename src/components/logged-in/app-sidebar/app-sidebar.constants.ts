import { ROUTES } from '@/routes';
import {
  CalendarDays,
  CreditCard,
  Dock,
  LayoutDashboard,
  LibraryBig,
  ScrollText,
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
          url: ROUTES.DASHBOARD.url,
          icon: LayoutDashboard
        },
        {
          title: 'Sobre',
          url: ROUTES.ABOUT.url,
          icon: LibraryBig
        }
      ]
    },
    {
      title: 'Eventos',
      url: '#',
      icon: CalendarDays,
      items: [
        {
          title: 'Meus Eventos',
          url: ROUTES.EVENTS.url,
          icon: ScrollText
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
          url: ROUTES.ACCOUNT.url,
          icon: SquareUser
        },
        {
          title: 'Usuários',
          url: ROUTES.USERS.url,
          icon: Users
        },
        {
          title: 'Pagamentos',
          url: ROUTES.PAYMENTS.url,
          icon: CreditCard
        }
      ]
    }
  ]
};
