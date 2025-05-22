export type PublicRoutes =
  | 'SIGNIN'
  | 'SIGNUP'
  | 'SIGNUP_ACTIVATION'
  | 'SIGNOUT'
  | 'ACTIVATION_REQUEST'
  | 'FORGOT_PASSWORD'
  | 'CHANGE_PASSWORD';

export type PrivateRoutes =
  | 'ACCOUNT'
  | 'DASHBOARD'
  | 'ABOUT'
  | 'EVENTS'
  | 'EVENTS_CREATE'
  | 'PAYMENTS'
  | 'PLANS'
  | 'CHECKOUT'
  | 'USERS'
  | 'USERS_CREATE';

export type RouteKeys = PublicRoutes | PrivateRoutes;

type BreadcrumbItem = {
  label: string;
  url?: string;
  goToBack?: boolean;
};

export type Route = {
  url: string;
  breadcrumbs?: BreadcrumbItem[];
};
