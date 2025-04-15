import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { Pencil, Trash2 } from 'lucide-react';

// TODO receber a lista de usuários como props
export function UsersListTableView() {
  const usersMocked = Array.from({ length: 10 }).map((_, index) => ({
    id: String(index),
    name: `User ${index}`,
    email: `user${index}@example.com`,
    mobilePhone: `(11) 99999-9999`,
    role: index === 0 ? 'Owner' : 'Admin',
    status: 'Active'
  }));

  return (
    <Table className="hidden min-[1130px]:block">
      <TableCaption>Usuários vinculados a sua conta</TableCaption>

      <TableHeader>
        <TableRow>
          <TableHead className="w-full text-slate-500">Nome</TableHead>
          <TableHead className="max-w-[350px] text-slate-500">Email</TableHead>
          <TableHead className="max-w-[150px] text-slate-500">
            Celular
          </TableHead>
          <TableHead className="max-w-[100px] text-slate-500">Tipo</TableHead>
          <TableHead className="max-w-[100px] text-slate-500">Status</TableHead>
          <TableHead className="max-w-[80px] text-right text-slate-500">
            Ações
          </TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {usersMocked.map((user) => (
          <TableRow key={user.id}>
            <TableCell className="w-full truncate py-4 font-medium overflow-ellipsis">
              {user.name}
            </TableCell>
            <TableCell className="max-w-[350px] truncate overflow-ellipsis">
              {user.email}
            </TableCell>
            <TableCell className="max-w-[150px] truncate overflow-ellipsis">
              {user.mobilePhone}
            </TableCell>
            <TableCell className="max-w-[100px] truncate overflow-ellipsis">
              {user.role}
            </TableCell>
            <TableCell className="max-w-[100px] truncate overflow-ellipsis">
              {user.status}
            </TableCell>
            <TableCell className="w-[80px] px-0 text-right">
              <Button className="p-2" size="icon" variant="ghost">
                <Pencil size={16} />
              </Button>
              <Button
                data-isowner={user.role === 'Owner'}
                className="p-0 data-[isowner=true]:hidden"
                size="icon"
                variant="ghost"
              >
                <Trash2 size={16} />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
