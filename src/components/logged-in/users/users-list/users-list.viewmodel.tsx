import { getMeDataAction } from '@/actions/me.action';
import { notFound } from 'next/navigation';
import { getAccount } from '../../account/account.actions';
import { deleteUserAction, getUserListAction } from './users-list.actions';
import { UsersListView } from './users-list.view';

export async function UsersListViewModel() {
  const [me, users] = await Promise.all([
    getMeDataAction(),
    getUserListAction()
  ]);

  if (!me || !users) {
    return notFound();
  }

  return (
    <UsersListView
      data={users}
      currentUser={me}
      removeAction={deleteUserAction}
      accountAction={getAccount}
    />
  );
}
