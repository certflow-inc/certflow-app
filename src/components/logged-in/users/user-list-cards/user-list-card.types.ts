import { Me } from '@/service/base/domain/me';
import { User } from '@/service/base/domain/user';
import { UserListItemObject } from '../users-list/user-list.types';

export type UserListCardsViewProps = {
  data: UserListItemObject[];
  currentUser: Me;
  onDeleteUser: (user: User) => void;
};
