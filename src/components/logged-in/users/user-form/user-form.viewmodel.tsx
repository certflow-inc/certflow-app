'use client';

import { useUserFormModel } from './user-form.model';
import { UserFormViewModelProps } from './user-form.types';
import { UserFormView } from './user-form.view';

export function UserFormViewModel({ action, data }: UserFormViewModelProps) {
  const model = useUserFormModel({ action, data });

  return <UserFormView model={model} />;
}
