'use client';

import { updateAccountData } from './account-data.actions';
import { useAccountDataModel } from './account-data.model';
import { AccountDataViewModelProps } from './account-data.types';
import { AccountDataView } from './account-data.view';

export function AccountViewModel({ data }: AccountDataViewModelProps) {
  const model = useAccountDataModel({ data, action: updateAccountData });

  return <AccountDataView model={model} />;
}
