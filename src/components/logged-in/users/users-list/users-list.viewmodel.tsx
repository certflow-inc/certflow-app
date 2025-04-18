import { getMeDataAction } from '@/actions/me.action';
import { notFound } from 'next/navigation';
import { deleteUserAction, getUserListAction } from './users-list.actions';
import { UsersListView } from './users-list.view';

export async function UsersListViewModel() {
  const me = await getMeDataAction();
  const users = await getUserListAction();

  if (!me || !users) {
    return notFound();
  }

  return (
    <UsersListView
      data={users}
      currentUser={me}
      removeAction={deleteUserAction}
    />
  );
}
