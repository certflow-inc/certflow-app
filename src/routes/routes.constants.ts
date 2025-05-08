import { Route, RouteKeys } from './routes.types';

export const ROUTES: Record<RouteKeys, Route> = {
  // PUBLIC
  SIGNIN: { url: '/signin' },
  SIGNUP: { url: '/signup' },
  SIGNUP_ACTIVATION: { url: '/signup-activation' },
  SIGNOUT: { url: '/signout' },
  ACTIVATION_REQUEST: { url: '/activation-request' },
  FORGOT_PASSWORD: { url: '/forgot-password' },
  CHANGE_PASSWORD: { url: '/change-password' },

  // PRIVATE
  ACCOUNT: {
    url: '/account',
    breadcrumbs: [{ label: 'Configurações' }, { label: 'Conta' }]
  },
  DASHBOARD: {
    url: '/dashboard',
    breadcrumbs: [{ label: 'Geral' }, { label: 'Dashboard' }]
  },
  ABOUT: {
    url: '/about',
    breadcrumbs: [{ label: 'Geral' }, { label: 'Sobre' }]
  },
  PAYMENTS: {
    url: '/payments',
    breadcrumbs: [{ label: 'Configurações' }, { label: 'Pagamentos' }]
  },
  PLANS: {
    url: '/plans',
    breadcrumbs: [{ label: 'Planos' }]
  },
  USERS: {
    url: '/users',
    breadcrumbs: [{ label: 'Configurações' }, { label: 'Usuários' }]
  },
  USERS_CREATE: {
    url: '/users/create',
    breadcrumbs: [
      { label: 'Configurações' },
      { label: 'Usuários', url: '/users' },
      { label: 'Novo' }
    ]
  }
};

export const PUBLIC_ROUTES = [
  ROUTES.SIGNIN.url,
  ROUTES.SIGNUP.url,
  ROUTES.SIGNUP_ACTIVATION.url,
  ROUTES.ACTIVATION_REQUEST.url,
  ROUTES.FORGOT_PASSWORD.url,
  ROUTES.CHANGE_PASSWORD.url
];

export const PRIVATE_ROUTES = [
  ROUTES.ACCOUNT.url,
  ROUTES.DASHBOARD.url,
  ROUTES.ABOUT.url,
  ROUTES.USERS.url,
  ROUTES.USERS_CREATE.url
];
