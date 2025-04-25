import { PrivateRoutes } from '@/routes';

type Breadcrumb = { label: string };

export const BREADCRUMBS: Record<PrivateRoutes, Breadcrumb[]> = {
  DASHBOARD: [{ label: 'Geral' }, { label: 'Dashboard' }],
  ABOUT: [{ label: 'Geral' }, { label: 'Sobre' }],
  ACCOUNT: [{ label: 'Configurações' }, { label: 'Conta' }],
  USERS: [{ label: 'Configurações' }, { label: 'Usuários' }],
  PAYMENTS: [{ label: 'Configurações' }, { label: 'Pagamentos' }],
  USERS_CREATE: [
    { label: 'Configurações' },
    { label: 'Usuário' },
    { label: 'Criar' }
  ]
};
