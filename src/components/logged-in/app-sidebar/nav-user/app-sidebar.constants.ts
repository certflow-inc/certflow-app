import {
  BookOpenCheck,
  Building2,
  CircleDollarSign,
  Dock,
  LayoutDashboard,
  LibraryBig,
  Settings,
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
