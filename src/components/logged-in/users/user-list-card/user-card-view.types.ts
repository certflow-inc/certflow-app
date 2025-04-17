import { Me } from '@/service/base/domain/me';
import { User } from '@/service/base/domain/user';
import { UserListItemObject } from '../users-list/user-list.types';

export type UserCardViewProps = {
  data: UserListItemObject;
  currentUser: Me;
  onDeleteUser: (user: User) => void;
};
