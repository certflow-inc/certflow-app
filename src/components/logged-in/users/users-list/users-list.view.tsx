'use client';

import { AlertDialog, Button } from '@/components';
import { User } from '@/service/base/domain/user';
import { DeleteUserResponse } from '@/service/base/types';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import { useCallback, useState } from 'react';
import { toast } from 'react-toastify';
import { UsersListCards } from '../user-list-cards';
import { UsersListTable } from '../user-list-table';
import { DELETE_USER_FLOW } from './user-list.constants';
import { UserListViewModelProps } from './user-list.types';

export function UsersListView({
  data,
  currentUser,
  removeAction
}: UserListViewModelProps) {
  const [userToDelete, setUserToDelete] = useState<User | null>(null);
  const [isProcess, setIsProcess] = useState(false);

  const handleDeleteUser = (user: User) => {
    setUserToDelete(user);
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

  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between gap-2 px-2">
          <h1 className="truncate text-xl font-semibold overflow-ellipsis text-slate-500 min-[1130px]:text-left min-[1130px]:text-2xl">
            Usuários vinculados a conta
          </h1>

          <Button
            asChild
            className="border-0 bg-transparent p-0 hover:bg-blue-200"
            variant="outline"
            size="lg"
          >
            <Link href="/users/create">
              <Plus />
              <span className="hidden md:block">Cadastrar usuário</span>
            </Link>
          </Button>
        </div>

        <section className="flex flex-col rounded-md bg-blue-100 p-1 min-[1130px]:bg-white min-[1130px]:p-1">
          <UsersListCards
            data={data}
            currentUser={currentUser}
            onDeleteUser={handleDeleteUser}
          />
          <UsersListTable
            data={data}
            onDeleteUser={handleDeleteUser}
            currentUser={currentUser}
          />
        </section>
      </div>

      <AlertDialog
        open={!!userToDelete}
        title="Confirma a exclusão do usuário?"
        description={userToDelete?.name}
        onConfirm={handleConfirmDeleteUser}
        confirmButtonLabel="Sim"
        onCancel={() => setUserToDelete(null)}
        cancelButtonLabel="Não"
        isProcess={isProcess}
      />
    </>
  );
}
