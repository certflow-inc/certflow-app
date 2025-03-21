export const COOKIE_NAMES = {
  SESSION: 'certflow-session',
  REFRESH_TOKEN: 'certflow-refresh-token',
  REVALIDATE_TOKEN: 'certflow-revalidate-token'
};

const NOW = Date.now();

const SESSION_EXPIRES_IN_MINUTES = process.env.SESSION_EXPIRES_IN_MINUTES
  ? Number(process.env.SESSION_EXPIRES_IN_MINUTES)
  : 10;

const REVALIDATE_EXPIRES_IN_MINUTES = SESSION_EXPIRES_IN_MINUTES + 0.5;

export const SESSION_EXPIRES_IN = new Date(
  NOW + SESSION_EXPIRES_IN_MINUTES * 60 * 1000
);
export const REVALIDATE_EXPIRES_IN = new Date(
  NOW + REVALIDATE_EXPIRES_IN_MINUTES * 60 * 1000
);
