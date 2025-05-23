import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { EventListRow } from '../event-list-row';
import { EventListTableViewProps } from './event-lista-table.types';

export function EventListTableView({
  data,
  onDeleteEvent,
  onArchiveEvent
}: EventListTableViewProps) {
  return (
    <Table key="payments-table" className="hidden min-[1130px]:block">
      <TableCaption>Meus eventos</TableCaption>

      <TableHeader>
        <TableRow>
          <TableHead className="w-1/4 max-w-[250px] text-slate-500">
            Nome
          </TableHead>
          <TableHead className="w-1/8 max-w-[150px] text-slate-500">
            Formato
          </TableHead>
          <TableHead className="w-1/8 max-w-[150px] text-slate-500">
            Tipo
          </TableHead>
          <TableHead className="w-1/8 max-w-[150px] text-slate-500">
            Status
          </TableHead>
          <TableHead className="w-1/8 max-w-[150px] text-slate-500">
            Início
          </TableHead>
          <TableHead className="w-1/8 max-w-[150px] text-slate-500">
            Término
          </TableHead>
          <TableHead className="w-1/8 max-w-[150px] text-slate-500">
            Duração
          </TableHead>
          <TableHead className="w-1/8 max-w-[120px] text-center text-slate-500">
            Ações
          </TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {data.map((event) => (
          <EventListRow
            key={event.id}
            data={event}
            onDeleteEvent={onDeleteEvent}
            onArchiveEvent={onArchiveEvent}
          />
        ))}
      </TableBody>
    </Table>
  );
}
