import { User } from '@/service/base/domain/user';
import { UserListItemObject } from '../users-list/user-list.types';

export type UserListTableViewProps = {
  data: UserListItemObject[];
  currentUser: User;
  onDeleteUser: (user: User) => void;
};
