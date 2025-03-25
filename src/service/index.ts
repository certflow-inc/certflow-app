import {
  accountVerification,
  activate,
  changePassword,
  check,
  passwordRecovery,
  refresh,
  signin,
  signout,
  signup
} from './endpoints';

export const CertFlowServices = {
  signup,
  activate,
  accountVerification,
  signin,
  refresh,
  passwordRecovery,
  changePassword,
  check,
  signout
};
