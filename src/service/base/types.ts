export type ApiResponse<T> = {
  ok: boolean;
  data?: T;
  dataError?: ApiError;
};

export type ApiError = {
  error: string;
};

type API_OK = 'Ok';
export type API_COMMON_ERRORS = 'API_SERVER_ERROR';
export type API_SERVER_ERROR =
  'An error occurred while processing your request. Please, try again later';
export type API_UNAUTHORIZED_ERROR = 'Invalid token';
export type API_FORBIDDEN_ERROR = 'You are not allowed to access this resource';

export type SigninResponse =
  | API_OK
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
  | API_OK
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

export type SignoutResponse =
  | API_OK
  | '\"refresh-token\" is required'
  | '\"refresh-token\" is invalid'
  | 'Invalid token'
  | API_SERVER_ERROR;

export type ActivateResponse =
  | API_OK
  | 'User cannot be activated'
  | 'Link is expired'
  | 'Link is invalid'
  | 'User cannot be activated'
  | '"token" contains an invalid value'
  | API_SERVER_ERROR;

export type AccountVerificationResponse =
  | API_OK
  | '\"email\" is required'
  | '\"email\" must be a valid email'
  | API_SERVER_ERROR;

export type MeResponse =
  | API_OK
  | 'Invalid token'
  | 'User not found"'
  | API_SERVER_ERROR;

export type PasswordRecoveryResponse =
  | API_OK
  | '\"email\" is required'
  | '\"email\" must be a valid email'
  | API_SERVER_ERROR;

export type ChangePasswordResponse =
  | API_OK
  | '\"password\" is required'
  | '"password" is not allowed to be empty'
  | '\"password\" length must be at least 8 characters long'
  | '\"password\" must contain at least 1 lowercase character'
  | '\"password\" must contain at least 1 uppercase character'
  | '\"password\" must contain at least 1 numeric character'
  | '\"password\" length must be less than or equal to 128 characters long'
  | '\"confirmPassword\" is required'
  | '\"confirmPassword\" does not match'
  | 'Link is invalid'
  | 'User is not active'
  | 'Link is expired'
  | API_SERVER_ERROR;

export type CheckResponse =
  | API_OK
  | API_SERVER_ERROR
  | '\"flow\" is required'
  | '\"flow\" must be one of [verification, recovery]'
  | '\"token\" is required'
  | '\"token\" contains an invalid value'
  | 'Link is invalid'
  | 'Link is expired';

export type AccountUpdateResponse =
  | API_OK
  | API_UNAUTHORIZED_ERROR
  | API_FORBIDDEN_ERROR
  | API_SERVER_ERROR
  | '\"fantasy\" is not allowed to be empty'
  | '\"fantasy\" length must be at least 3 characters long'
  | '\"fantasy\" length must be less than or equal to 128 characters long';

export type AccountAddressUpdateResponse =
  | API_OK
  | API_UNAUTHORIZED_ERROR
  | API_FORBIDDEN_ERROR
  | API_SERVER_ERROR
  | '\"address\" is required'
  | '\"address\" length must be at least 3 characters long'
  | '\"address\" length must be less than or equal to 128 characters long'
  | '\"number\" is required'
  | '\"number\" is not allowed to be empty'
  | '\"number\" length must be less than or equal to 20 characters long'
  | '\"complement\" is not allowed to be empty'
  | '\"complement\" length must be at least 3 characters long'
  | '\"complement\" length must be less than or equal to 128 characters long'
  | '\"district\" is required'
  | '\"district\" length must be at least 3 characters long'
  | '\"district\" length must be less than or equal to 64 characters long'
  | '\"city\" is required'
  | '\"city\" length must be at least 3 characters long'
  | '\"city\" length must be less than or equal to 128 characters long'
  | '\"state\" is required'
  | '\"state\" length must be at least 3 characters long'
  | '\"state\" length must be less than or equal to 64 characters long'
  | '\"zip\" is required'
  | '\"zip\" length must be at least 3 characters long'
  | '\"zip\" length must be less than or equal to 16 characters long'
  | '\"country\" is required'
  | '\"country\" length must be at least 3 characters long'
  | '\"country\" length must be less than or equal to 32 characters long';

export type CreateUserResponse =
  | API_OK
  | API_UNAUTHORIZED_ERROR
  | API_FORBIDDEN_ERROR
  | API_SERVER_ERROR
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
  | '\"role\" is required'
  | '\"role\" must be one of [manager, user]'
  | '\"picture\" is not allowed'
  | '\"status\" is not allowed'
  | 'You have reached the limit of users'
  | 'User already registered';

export type DeleteUserResponse =
  | API_OK
  | API_UNAUTHORIZED_ERROR
  | API_FORBIDDEN_ERROR
  | API_SERVER_ERROR
  | '\"userId\" is required'
  | '\"userId\" contains an invalid value'
  | 'You cannot delete yourself';

export type PaymentResponse =
  | API_OK
  | API_UNAUTHORIZED_ERROR
  | API_FORBIDDEN_ERROR
  | API_SERVER_ERROR;

export type PaymentCreateResponseMessages =
  | API_OK
  | API_UNAUTHORIZED_ERROR
  | API_FORBIDDEN_ERROR
  | API_SERVER_ERROR
  | '\"planId\" is required'
  | '\"planId\" contains an invalid value'
  | '\"payment\" is required'
  | 'Your payment could not be processed. Detail received #######'
  | '\"payment.provider\" is required'
  | '\"payment.provider\" must be one of [certflow, mercadopago]'
  | '\"payment.method\" is required'
  | '\"payment.method\" must be [exchange]'
  | '\"payment.method\" must be one of [pix, amex, cabal, elo, hipercard, master, visa]'
  | '\"payment.token\" is required'
  | '\"payment.issuerId\" is required'
  | '\"payment.issuerId\" must be a number'
  | '\"payment.issuerId\" must be an integer'
  | '\"payment.taxType\" is required'
  | '\"payment.taxType\" must be one of [CPF, CNPJ]'
  | '\"payment.taxId\" is required'
  | '\"payment.taxId\" contains an invalid value'
  | 'Plan not found'
  | 'Account not found'
  | 'User not found'
  | 'Provider not available'
  | 'Invalid currency \"####\" for this payment'
  | 'Plan amount must be integer'
  | 'You do not have enough credits to make this payment'
  | 'Payment method #### not supported'
  | 'Failed to process your payment. Reason: #####';
