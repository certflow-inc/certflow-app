import { Me } from '@/service/base/domain/me';
import { User } from '@/service/base/domain/user';

export type UserListViewModelProps = {
  data: UserListItemObject[];
  currentUser: Me;
};

export type UserListItemObject = User & {
  translatedStatus: string;
  translatedRole: string;
};
