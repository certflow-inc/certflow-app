import { IntegrationFlow } from '@/types';
import { z } from 'zod';
import { sendActivationRequest } from './form.actions';
import { useActivationRequestModel } from './form.model';
import { ACTIVATION_REQUEST_FORM_SCHEMA } from './form.schema';

export type ActivatioRequestFormData = z.infer<
  typeof ACTIVATION_REQUEST_FORM_SCHEMA
>;

export type ActivationRequestViewModelProps = {
  onActivationRequestFormSubmit: (data: IntegrationFlow | null) => void;
};

export type UseActivationRequestFormModelProps = {
  action: typeof sendActivationRequest;
  onActivationRequestFormSubmit: (data: IntegrationFlow | null) => void;
};

export type ActivationRequestFormViewProps = {
  model: ReturnType<typeof useActivationRequestModel>;
};
