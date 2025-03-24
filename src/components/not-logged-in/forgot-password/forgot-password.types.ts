export type ForgotPasswordFlow = {
  title: string;
  description: string;
  destination?: string;
  destinationLabel?: string;
  flow?: boolean;
  toast?: boolean;
  field?: string;
};
