type PublicRoutes = 'SIGNIN' | 'SIGNUP' | 'FORGOT-PASSWORD';
type PrivateRoutes = 'DASHBOARD';

export const PUBLIC_ROUTES: Record<PublicRoutes, string> = {
  SIGNIN: '/signin',
  SIGNUP: '/signup',
  'FORGOT-PASSWORD': '/forgot-password'
};

export const PRIVATE_ROUTES: Record<PrivateRoutes, string> = {
  DASHBOARD: '/dashboard'
};
