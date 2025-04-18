import { User } from '@/service/base/domain/user';
import { DeleteUserResponse } from '@/service/base/types';
import { useCallback, useState } from 'react';
import { toast } from 'react-toastify';
import { DELETE_USER_FLOW } from './user-list.constants';
import { UseListModelProps } from './user-list.types';

export function useUserListModel({ removeAction }: UseListModelProps) {
  const [userToDelete, setUserToDelete] = useState<User | null>(null);
  const [isProcess, setIsProcess] = useState(false);

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

  return {
    userToDelete,
    isProcess,
    handleDeleteUser,
    handleCancelDeleteUser,
    handleConfirmDeleteUser
  };
}
