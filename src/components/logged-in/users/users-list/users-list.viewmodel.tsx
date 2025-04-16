import { notFound } from 'next/navigation';
import { getUserList } from './users-list.actions';
import { UsersListView } from './users-list.view';

export async function UsersListViewModel() {
  const users = await getUserList();

  if (!users) {
    return notFound();
  }

  return <UsersListView data={users} />;
}
