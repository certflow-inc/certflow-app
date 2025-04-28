import { redirectFromClient } from '@/actions/navigation';
import { Role } from '@/service/base/domain/me';
import { User } from '@/service/base/domain/user';
import { DeleteUserResponse } from '@/service/base/types';
import { useCallback, useMemo, useState } from 'react';
import { toast } from 'react-toastify';
import { DELETE_USER_FLOW } from './user-list.constants';
import { UseListModelProps } from './user-list.types';

export function useUserListModel({
  data,
  currentUser,
  removeAction,
  account
}: UseListModelProps) {
  const [userToDelete, setUserToDelete] = useState<User | null>(null);
  const [isProcess, setIsProcess] = useState(false);
  const isOwnerCurrentUser = currentUser.role === Role.Owner.toString();
  const maxUserAllowed = useMemo(
    () => account.services['users'],
    [account.services]
  );
  const canAddMoreUsers = useMemo(
    () => maxUserAllowed > 0 && data.length < maxUserAllowed,
    [data, maxUserAllowed]
  );

  const handleDeleteUser = (user: User) => {
    setUserToDelete(user);
  };

  const handleCancelDeleteUser = () => {
    setUserToDelete(null);
  };

  const handleConfirmDeleteUser = useCallback(async () => {
    if (userToDelete?.userId) {
      setIsProcess(true);
      const response = await removeAction(userToDelete.userId);

      if (response.ok) {
        toast(DELETE_USER_FLOW.Ok.title.replace('@user', userToDelete.name), {
          type: 'success',
          position: 'bottom-center',
          closeOnClick: true
        });
      }

      if (!response.ok && response.dataError) {
        const feedbackError =
          DELETE_USER_FLOW[response.dataError?.error as DeleteUserResponse];

        if (feedbackError.redirect) {
          redirectFromClient(feedbackError.redirect);
          return;
        }

        if (feedbackError.toast) {
          toast(feedbackError.title, {
            type: 'error',
            position: 'bottom-center',
            closeOnClick: true
          });
        }
      }

      setUserToDelete(null);
      setIsProcess(false);
    }
  }, [removeAction, userToDelete?.name, userToDelete?.userId]);

  return {
    isProcess,
    userToDelete,
    maxUserAllowed,
    canAddMoreUsers,
    isOwnerCurrentUser,
    handleDeleteUser,
    handleCancelDeleteUser,
    handleConfirmDeleteUser
  };
}
