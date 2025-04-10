import { Address } from '@/service/base/domain/account';
import { z } from 'zod';
import { updateAccountAddressData } from './account-address.actions';
import { ACCOUNT_ADDRESS_SCHEMA } from './account-address.schema';

export type AccountAddressFormData = z.infer<typeof ACCOUNT_ADDRESS_SCHEMA>;

export type UseAccountAddresModelProps = {
  action: typeof updateAccountAddressData;
  data: Address | undefined;
};

export type AccountAddressViewProps = {
  data: Address | undefined;
};
