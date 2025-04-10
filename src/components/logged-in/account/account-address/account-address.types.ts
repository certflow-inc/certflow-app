import { Address } from '@/service/base/domain/account';
import { z } from 'zod';
import { getCep, updateAccountAddressData } from './account-address.actions';
import { ACCOUNT_ADDRESS_SCHEMA } from './account-address.schema';

export type AccountAddressFormData = z.infer<typeof ACCOUNT_ADDRESS_SCHEMA>;

export type UseAccountAddresModelProps = {
  data: Address | undefined;
  action: typeof updateAccountAddressData;
  cepAction: typeof getCep;
};

export type AccountAddressViewProps = {
  data: Address | undefined;
};
