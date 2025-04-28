import { getMeDataAction } from '@/actions/me.action';
import { notFound } from 'next/navigation';
import { getAccount } from '../../account/account.actions';
import { deleteUserAction, getUserListAction } from './users-list.actions';
import { UsersListView } from './users-list.view';

export async function UsersListViewModel() {
  const [me, account, users] = await Promise.all([
    getMeDataAction(),
    getAccount(),
    getUserListAction()
  ]);

  if (!me || !account.data || !users) {
    return notFound();
  }

  return (
    <UsersListView
      data={users}
      currentUser={me}
      account={account.data}
      removeAction={deleteUserAction}
    />
  );
}
