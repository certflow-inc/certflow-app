// ui
export { Button } from './ui/button';
export { Input } from './ui/input';

// commons
export { EnvironmentIndicator } from './commons/environment-indicator';
export { NoData } from './commons/fallbacks';

// not logged in components
import {
  ActivationRequest,
  ChangePassword,
  Container,
  FooterWaves,
  ForgotPassword,
  HeaderLogo,
  Signin,
  Signout,
  Signup,
  SignupActivation
} from './not-logged-in';

export const NotLoggedIn = {
  ActivationRequest,
  Container,
  FooterWaves,
  ForgotPassword,
  HeaderLogo,
  Signin,
  Signup,
  SignupActivation,
  ChangePassword,
  Signout
};

import { Account, AppSidebar, Container as LoggedContainer } from './logged-in';

export const LoggedIn = {
  Account,
  AppSidebar,
  Container: LoggedContainer
};
