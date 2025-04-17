import { redirectFromClient } from '@/actions/navigation';
import { ROUTES } from '@/routes';
import { CreateUserResponse } from '@/service/base/types';
import { IntegrationFieldError } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { CREATE_USER_FLOW } from './user-form.constants';
import { USER_FORM_SCHEMA } from './user-form.schema';
import { UserFormData, UserFormModelProps } from './user-form.types';

export function useUserFormModel({ data, action }: UserFormModelProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<
    IntegrationFieldError[] | undefined
  >();

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isValid }
  } = useForm<UserFormData>({
    mode: 'onChange',
    resolver: zodResolver(USER_FORM_SCHEMA)
  });

  const registeredFields = useMemo(() => {
    return Object.fromEntries(
      Object.keys(USER_FORM_SCHEMA.shape).map((key) => [
        key,
        register(key as keyof UserFormData)
      ])
    );
  }, [register]);

  const handleFormSubmit = handleSubmit(async (data: UserFormData) => {
    setFieldErrors(undefined);
    setIsProcessing(true);
    const response = await action({ ...data });
    setIsProcessing(false);

    if (response.ok) {
      reset();
      toast(CREATE_USER_FLOW.Ok.title, {
        type: 'success',
        position: 'bottom-center',
        closeOnClick: true,
        onClose: () => {
          redirectFromClient(ROUTES.USERS);
        }
      });
      return;
    }

    const feedbackError =
      CREATE_USER_FLOW[response.dataError?.error as CreateUserResponse];

    if (feedbackError.toast) {
      toast(feedbackError.title, {
        type: 'error',
        position: 'bottom-center',
        closeOnClick: true
      });
      return;
    }

    if (feedbackError.field) {
      setFieldErrors([
        {
          field: feedbackError.field,
          message: feedbackError.title
        }
      ]);
    }
  });

  useEffect(() => {
    if (fieldErrors) {
      fieldErrors.forEach((error) => {
        setError(error.field as keyof UserFormData, {
          message: error.message
        });
      });
    }
  }, [fieldErrors, setError]);

  return {
    data,
    errors,
    isValid,
    isProcessing,
    registeredFields,
    handleFormSubmit
  };
}
