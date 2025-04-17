import {
  accountVerification,
  activate,
  changePassword,
  check,
  createUser,
  getAccount,
  getAddress,
  getMe,
  getUsers,
  passwordRecovery,
  refresh,
  signin,
  signout,
  signup,
  updateAccount,
  updateAddress
} from './endpoints';

export const CertFlowServices = {
  signup,
  activate,
  accountVerification,
  signin,
  getMe,
  refresh,
  passwordRecovery,
  changePassword,
  check,
  signout,
  getAccount,
  updateAccount,
  getAddress,
  updateAddress,
  getUsers,
  createUser
};
