export type Auth = {
  token: string;
  refreshToken: string;
};

export type RefreshToken = {
  token: string;
};

export type ChangePassword = {
  password: string;
  confirmPassword: string;
};
