type PublicRoutes =
  | 'SIGNIN'
  | 'SIGNUP'
  | 'SIGNUP_ACTIVATION'
  | 'ACTIVATION_REQUEST'
  | 'FORGOT_PASSWORD';
type PrivateRoutes = 'DASHBOARD';

export const PUBLIC_ROUTES: Record<PublicRoutes, string> = {
  SIGNIN: '/signin',
  SIGNUP: '/signup',
  SIGNUP_ACTIVATION: '/signup-activation',
  ACTIVATION_REQUEST: '/activation-request',
  FORGOT_PASSWORD: '/forgot-password'
};

export const PRIVATE_ROUTES: Record<PrivateRoutes, string> = {
  DASHBOARD: '/dashboard'
};
