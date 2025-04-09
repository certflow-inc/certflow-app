import { Account } from '@/service/domain/account';
import { z } from 'zod';
import { updateAccountData } from './account-data.actions';
import { useAccountDataModel } from './account-data.model';
import { ACCOUNT_DATA_SCHEMA } from './account-data.schema';

export type AccountDataFormData = z.infer<typeof ACCOUNT_DATA_SCHEMA>;

export type AccountDataViewModelProps = {
  data: Account;
};

export type UseAccountModelProps = {
  action: typeof updateAccountData;
  data: Account;
};

export type AccountDataViewProps = {
  model: ReturnType<typeof useAccountDataModel>;
};
