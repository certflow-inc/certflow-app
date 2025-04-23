import { Me } from '@/service/base/domain/me';
import { User } from '@/service/base/domain/user';
import { getAccount } from '../../account/account.actions';
import { deleteUserAction } from './users-list.actions';

export type UserListViewModelProps = {
  data: UserListItemObject[];
  currentUser: Me;
  removeAction: typeof deleteUserAction;
  accountAction: typeof getAccount;
};

export type UseListModelProps = {
  currentUser: Me;
  data: UserListItemObject[];
  removeAction: typeof deleteUserAction;
  accountAction: typeof getAccount;
};

export type UserListItemObject = User & {
  translatedStatus: string;
  translatedRole: string;
};
