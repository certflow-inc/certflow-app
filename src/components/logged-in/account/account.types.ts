import { getAccount } from './account.actions';

export type AccountViewProps = {
  accountAction: typeof getAccount;
};
