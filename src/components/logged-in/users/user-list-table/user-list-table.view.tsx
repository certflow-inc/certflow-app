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

export function UsersListTableView() {
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
        <TableRow key={1}>
          <TableCell className="w-full truncate py-4 font-medium overflow-ellipsis">
            Ricardo Almendro Ruiz
          </TableCell>
          <TableCell className="max-w-[350px] truncate overflow-ellipsis">
            ricardo.almendro.ruiz@gmail.com.br
          </TableCell>
          <TableCell className="max-w-[150px] truncate overflow-ellipsis">
            (19) 99941-2206
          </TableCell>
          <TableCell className="max-w-[100px] truncate overflow-ellipsis">
            Owner
          </TableCell>
          <TableCell className="max-w-[100px] truncate overflow-ellipsis">
            Ativo
          </TableCell>
          <TableCell className="w-[80px] px-0 text-right">
            <Button className="p-2" size="icon" variant="ghost">
              <Pencil size={16} />
            </Button>
          </TableCell>
        </TableRow>

        <TableRow key={2}>
          <TableCell className="w-full truncate py-4 font-medium overflow-ellipsis">
            Cinthya Hayane de Carvalho
          </TableCell>
          <TableCell className="max-w-[350px] truncate overflow-ellipsis">
            ccarvalho@gmail.com
          </TableCell>
          <TableCell className="max-w-[150px] truncate overflow-ellipsis">
            (19) 99941-2206
          </TableCell>
          <TableCell className="max-w-[100px] truncate overflow-ellipsis">
            Manager
          </TableCell>
          <TableCell className="max-w-[100px] truncate overflow-ellipsis">
            Inativo
          </TableCell>
          <TableCell className="w-[80px] px-0 text-right">
            <Button className="p-0" size="icon" variant="ghost">
              <Pencil size={16} />
            </Button>
            <Button className="p-0" size="icon" variant="ghost">
              <Trash2 size={16} />
            </Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
