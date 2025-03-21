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

export type SigninResponse =
  | 'Ok'
  | 'Invalid email or password'
  | '\"email\" is required'
  | '\"email\" length must be less than or equal to 254 characters long'
  | '\"email\" must be a valid email'
  | '\"email\" is not allowed to be empty'
  | '\"password\" is required'
  | '\"password\" length must be at least 8 characters long'
  | '\"password\" length must be less than or equal to 128 characters long'
  | '"\password\" is not allowed to be empty'
  | 'User is not active'
  | 'Account is not active'
  | API_SERVER_ERROR;

export type SignupResponse =
  | 'Ok'
  | 'User already registered'
  | 'Account already registered'
  | '\"taxId\" is required'
  | '\"taxId\" contains an invalid value'
  | '\"name\" is required'
  | '\"name\" length must be at least 3 characters long'
  | '\"name\" length must be less than or equal to 128 characters long'
  | '\"mobilePhone\" is required'
  | '\"mobilePhone\" contains an invalid value'
  | '\"email\" is required'
  | '\"email\" must be a valid email'
  | '\"email\" length must be less than or equal to 254 characters long'
  | '\"companyTaxId\" is required'
  | '\"companyTaxId\" contains an invalid value'
  | '\"companyTaxId\" is not allowed'
  | '\"companyName\" is required'
  | '\"companyName\" length must be at least 3 characters long'
  | '\"companyName\" length must be less than or equal to 128 characters long'
  | '\"companyName\" is not allowed'
  | '\"password\" is required'
  | '\"password\" length must be at least 8 characters long'
  | '\"password\" length must be less than or equal to 128 characters long'
  | '\"password\" must contain at least 1 lowercase character'
  | '\"password\" must contain at least 1 uppercase character'
  | '\"password\" must contain at least 1 numeric character'
  | '\"confirmPassword\" is required'
  | '\"confirmPassword\" does not match'
  | API_SERVER_ERROR;

export type ActivateResponse =
  | 'Ok'
  | 'User cannot be activated'
  | 'Link is expired'
  | 'Link is invalid'
  | '"token" contains an invalid value'
  | API_SERVER_ERROR;

export type AccountVerificationResponse =
  | 'Ok'
  | '\"email\" is required'
  | '\"email\" must be a valid email'
  | API_SERVER_ERROR;
