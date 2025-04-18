'use client';

import { AlertDialog, Button } from '@/components';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import { UsersListCards } from '../user-list-cards';
import { UsersListTable } from '../user-list-table';
import { useUserListModel } from './user-list.model';
import { UserListViewModelProps } from './user-list.types';

export function UsersListView({
  data,
  currentUser,
  removeAction
}: UserListViewModelProps) {
  const {
    isProcess,
    userToDelete,
    handleDeleteUser,
    handleCancelDeleteUser,
    handleConfirmDeleteUser
  } = useUserListModel({
    removeAction
  });

  return (
    <>
      <section className="flex flex-col gap-6">
        <header className="flex items-center justify-between gap-2 px-2">
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
        </header>

        <div className="flex flex-col rounded-md bg-blue-100 p-1 min-[1130px]:bg-white min-[1130px]:p-1">
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
        </div>
      </section>

      <AlertDialog
        open={!!userToDelete}
        title="Confirma a exclusão do usuário?"
        description={userToDelete?.name}
        onConfirm={handleConfirmDeleteUser}
        confirmButtonLabel="Sim"
        onCancel={handleCancelDeleteUser}
        cancelButtonLabel="Não"
        isProcess={isProcess}
      />
    </>
  );
}
