import { Account } from '@/service/base/domain/account';
import { Me } from '@/service/base/domain/me';
import { User } from '@/service/base/domain/user';
import { deleteUserAction } from './users-list.actions';

export type UserListViewModelProps = {
  data: UserListItemObject[];
  currentUser: Me;
  account: Account;
  removeAction: typeof deleteUserAction;
};

export type UseListModelProps = {
  data: UserListItemObject[];
  currentUser: Me;
  account: Account;
  removeAction: typeof deleteUserAction;
};

export type UserListItemObject = User & {
  translatedStatus: string;
  translatedRole: string;
};
