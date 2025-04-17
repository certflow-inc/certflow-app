import { User } from '@/service/base/domain/user';
import { z } from 'zod';
import { createUser } from '../users-actions';
import { useUserFormModel } from './user-form.model';
import { USER_FORM_SCHEMA } from './user-form.schema';

export type UserFormData = z.infer<typeof USER_FORM_SCHEMA>;

export type UserFormViewModelProps = {
  action: typeof createUser;
  data?: User;
};

export type UserFormModelProps = {
  action: typeof createUser;
  data?: User;
};

export type UserFormViewProps = {
  model: ReturnType<typeof useUserFormModel>;
};
