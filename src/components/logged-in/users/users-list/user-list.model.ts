import { Role } from '@/service/base/domain/me';
import { User } from '@/service/base/domain/user';
import { DeleteUserResponse } from '@/service/base/types';
import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { DELETE_USER_FLOW } from './user-list.constants';
import { UseListModelProps } from './user-list.types';

export function useUserListModel({
  data,
  currentUser,
  removeAction,
  accountAction
}: UseListModelProps) {
  const [userToDelete, setUserToDelete] = useState<User | null>(null);
  const [isProcess, setIsProcess] = useState(false);
  const [maxUserAllowed, setMaxUserAllowed] = useState(0);
  const [canAddMoreUsers, setCanAddMoreUsers] = useState(false);
  const isOwnerCurrentUser = currentUser.role === Role.Owner.toString();

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

        toast(feedbackError.title, {
          type: 'error',
          position: 'bottom-center',
          closeOnClick: true
        });
      }

      setUserToDelete(null);
      setIsProcess(false);
    }
  }, [removeAction, userToDelete?.name, userToDelete?.userId]);

  useEffect(() => {
    const getMaxUserAllowed = async () => {
      const response = await accountAction();

      if (response.ok && response.data) {
        const maxUserAllowed = response.data.services['users'];
        setMaxUserAllowed(maxUserAllowed);
        setCanAddMoreUsers(maxUserAllowed > 0 && data.length < maxUserAllowed);
      }
    };

    getMaxUserAllowed();
  }, [accountAction, data.length]);

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
