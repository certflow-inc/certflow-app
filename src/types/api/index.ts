export type ApiResponse<T> = {
  status: 'ok' | 'error';
  data?: T;
  error?: ApiError;
};

type ApiError = {
  message: string;
};
