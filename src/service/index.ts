import {
  accountVerification,
  activate,
  changePassword,
  check,
  getAccount,
  getAddress,
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
  signout,
  getAccount,
  getAddress
};
