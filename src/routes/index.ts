type PublicRoutes =
  | 'SIGNIN'
  | 'SIGNUP'
  | 'SIGNUP_ACTIVATION'
  | 'SIGNOUT'
  | 'ACTIVATION_REQUEST'
  | 'FORGOT_PASSWORD'
  | 'CHANGE_PASSWORD';
type PrivateRoutes = 'ACCOUNT' | 'DASHBOARD' | 'ABOUT';

type Routes = PublicRoutes | PrivateRoutes;

export const ROUTES: Record<Routes, string> = {
  SIGNIN: '/signin',
  SIGNUP: '/signup',
  SIGNUP_ACTIVATION: '/signup-activation',
  SIGNOUT: '/signout',
  ACTIVATION_REQUEST: '/activation-request',
  FORGOT_PASSWORD: '/forgot-password',
  CHANGE_PASSWORD: '/change-password',
  ACCOUNT: '/account',
  DASHBOARD: '/dashboard',
  ABOUT: '/about'
};

export const PUBLIC_ROUTES = [
  ROUTES.SIGNIN,
  ROUTES.SIGNUP,
  ROUTES.SIGNUP_ACTIVATION,
  ROUTES.ACTIVATION_REQUEST,
  ROUTES.FORGOT_PASSWORD,
  ROUTES.CHANGE_PASSWORD
];

export const PRIVATE_ROUTES = [ROUTES.ACCOUNT, ROUTES.DASHBOARD, ROUTES.ABOUT];
