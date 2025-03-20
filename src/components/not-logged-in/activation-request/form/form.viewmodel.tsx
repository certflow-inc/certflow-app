'use client';

import { sendActivationRequest } from './form.actions';
import { useActivationRequestModel } from './form.model';
import { ActivationRequestViewModelProps } from './form.types';
import { ActivationRequestView } from './form.view';

export function ActivationRequestViewModel({
  onActivationRequestFormSubmit
}: ActivationRequestViewModelProps) {
  const model = useActivationRequestModel({
    action: sendActivationRequest,
    onActivationRequestFormSubmit
  });
  return <ActivationRequestView model={model} />;
}
