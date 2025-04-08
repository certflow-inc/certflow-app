import { getAccount } from './account.actions';
import { AccountView } from './account.view';

export async function AccountViewModel() {
  return <AccountView accountAction={getAccount} />;
}
