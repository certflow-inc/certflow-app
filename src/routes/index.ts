type PublicRoutes =
  | 'SIGNIN'
  | 'SIGNUP'
  | 'SIGNUP_ACTIVATION'
  | 'ACTIVATION_REQUEST'
  | 'FORGOT_PASSWORD';
type PrivateRoutes = 'DASHBOARD' | 'ABOUT';

type Routes = PublicRoutes | PrivateRoutes;

export const ROUTES: Record<Routes, string> = {
  SIGNIN: '/signin',
  SIGNUP: '/signup',
  SIGNUP_ACTIVATION: '/signup-activation',
  ACTIVATION_REQUEST: '/activation-request',
  FORGOT_PASSWORD: '/forgot-password',
  DASHBOARD: '/dashboard',
  ABOUT: '/about'
};

export const PUBLIC_ROUTES = [
  ROUTES.SIGNIN,
  ROUTES.SIGNUP,
  ROUTES.SIGNUP_ACTIVATION,
  ROUTES.ACTIVATION_REQUEST,
  ROUTES.FORGOT_PASSWORD
];

export const PRIVATE_ROUTES = [ROUTES.DASHBOARD, ROUTES.ABOUT];
