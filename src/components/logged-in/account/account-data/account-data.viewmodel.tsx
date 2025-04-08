import { AccountDataViewModelProps } from './account-data.types';
import { AccountDataView } from './account-data.view';

export function AccountViewModel({ data }: AccountDataViewModelProps) {
  return <AccountDataView data={data} />;
}
