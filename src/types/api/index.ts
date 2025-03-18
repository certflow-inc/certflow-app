export type ApiResponse<T> = {
  ok: boolean;
  data?: T;
  dataError?: ApiError;
};

export type ApiError = {
  error: string;
};
