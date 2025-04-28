export type IntegrationFlow = {
  title: string;
  description: string;
  destination?: string;
  destinationLabel?: string;
  flow?: boolean;
  toast?: boolean;
  field?: string;
  redirect?: string;
};

export type IntegrationFieldError = {
  field: string;
  message: string;
};
