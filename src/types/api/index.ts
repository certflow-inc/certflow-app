export type ApiResponse<T> = {
  ok: boolean;
  data?: T;
  dataError?: ApiError;
};

export type ApiError = {
  error: string;
};

export type API_COMMON_ERRORS = 'API_SERVER_ERROR';
export type API_SERVER_ERROR =
  'An error occurred while processing your request. Please, try again later';
