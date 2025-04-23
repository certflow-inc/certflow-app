'use client';

import { Button } from '@/components';
import { format, INPUT_MASKED_FORMATS } from '@/components/ui/input-masked';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { Role } from '@/service/base/domain/me';
import { Trash2 } from 'lucide-react';
import { UserListTableViewProps } from './user-list-table.types';

export function UsersListTableView({
  data,
  currentUser,
  onDeleteUser
}: UserListTableViewProps) {
  return (
    <Table className="hidden min-[1130px]:block">
      <TableCaption>{data.length} usuários vinculados a conta</TableCaption>

      <TableHeader>
        <TableRow>
          <TableHead className="w-1/2 max-w-[250px] text-slate-500">
            Nome
          </TableHead>
          <TableHead className="w-1/2 max-w-[250px] text-slate-500">
            Email
          </TableHead>
          <TableHead className="max-w-[300px] text-slate-500">
            Celular
          </TableHead>
          <TableHead className="max-w-[150px] text-slate-500">Tipo</TableHead>
          <TableHead className="max-w-[150px] text-slate-500">Status</TableHead>
          <TableHead className="max-w-[80px] text-right text-slate-500">
            Ações
          </TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {data.map((user) => {
          const isOwnerCurrentUser = currentUser.role === Role.Owner.toString();
          const isOwnerUserInDisplay = user.role === Role.Owner.toString();

          return (
            <TableRow key={user.userId}>
              <TableCell className="w-1/2 max-w-[250px] truncate py-4 text-base overflow-ellipsis md:text-lg">
                {user.name}
              </TableCell>
              <TableCell className="w-1/2 max-w-[250px] truncate text-base overflow-ellipsis md:text-lg">
                {user.email}
              </TableCell>
              <TableCell className="max-w-[300px] truncate text-base overflow-ellipsis md:text-lg">
                {format(user.mobilePhone, INPUT_MASKED_FORMATS.phone)}
              </TableCell>
              <TableCell className="max-w-[150px] truncate text-base overflow-ellipsis md:text-lg">
                {user.translatedRole}
              </TableCell>
              <TableCell className="max-w-[150px] truncate text-base overflow-ellipsis md:text-lg">
                {user.translatedStatus}
              </TableCell>
              <TableCell className="w-[80px] px-0 text-right">
                <Button
                  data-isowner={!isOwnerUserInDisplay && isOwnerCurrentUser}
                  className="hidden justify-end p-0 data-[isowner=true]:flex"
                  size="icon"
                  variant="ghost"
                  onClick={() => onDeleteUser(user)}
                >
                  <Trash2 size={16} />
                </Button>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
