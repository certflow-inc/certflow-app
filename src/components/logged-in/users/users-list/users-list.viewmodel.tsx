import { getMeDataAction } from '@/actions/me.action';
import { notFound } from 'next/navigation';
import { getUserListAction } from './users-list.actions';
import { UsersListView } from './users-list.view';

export async function UsersListViewModel() {
  const users = await getUserListAction();
  const me = await getMeDataAction();

  if (!users || !me) {
    return notFound();
  }

  return <UsersListView data={users} currentUser={me} />;
}
