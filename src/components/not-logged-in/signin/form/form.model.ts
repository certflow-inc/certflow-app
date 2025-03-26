import { useRouter } from 'next/navigation';
import { useActionState, useCallback, useEffect } from 'react';
import { toast } from 'react-toastify';
import { signinAction } from './form.action';
import { SigninFormValidations, UseSigninFormModelProps } from './form.types';

const initialFormState: SigninFormValidations = {};

export function useFormModel({ onSigninSubmit }: UseSigninFormModelProps) {
  const rotuer = useRouter();

  const [formState, formAction, pending] = useActionState(
    signinAction,
    initialFormState
  );

  const showToast = useCallback((message: string) => {
    toast(message, {
      type: 'error',
      position: 'bottom-center',
      closeOnClick: true
    });
  }, []);

  const updateView = useCallback(() => {
    if (!formState.ok) {
      if (formState.integrationFlow?.toast) {
        showToast(formState.integrationFlow.title);
        return;
      }

      if (formState.integrationFlow?.flow) {
        onSigninSubmit(formState.integrationFlow);
        return;
      }

      showToast(formState.message!);
    }
  }, [formState, onSigninSubmit, showToast]);

  useEffect(() => {
    updateView();
  }, [updateView]);

  return {
    rotuer,
    formState,
    formAction,
    pending
  };
}
