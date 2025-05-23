import { Button } from '@/components/ui/button';
import { TableCell, TableRow } from '@/components/ui/table';
import { ROUTES } from '@/routes';
import { formatDateToString } from '@/utils/date-format.utils';
import { Archive, Pencil, Trash } from 'lucide-react';
import Link from 'next/link';
import { EventListRowViewProps } from './event-list-row.types';

export function EventListRowView({
  data,
  onDeleteEvent,
  onArchiveEvent
}: EventListRowViewProps) {
  return (
    <TableRow className="cursor-default data-[expand-on-row-click=true]:cursor-pointer data-[expanded=true]:bg-blue-50">
      <TableCell
        className="w-1/4 max-w-[250px] truncate py-4 text-base overflow-ellipsis md:text-lg"
        title={data.name}
      >
        {data.name}
      </TableCell>
      <TableCell
        className="w-1/8 max-w-[150px] truncate text-base overflow-ellipsis md:text-lg"
        title={data.format}
      >
        {data.format}
      </TableCell>
      <TableCell
        className="w-1/8 max-w-[150px] truncate text-base overflow-ellipsis md:text-lg"
        title={data.type}
      >
        {data.type}
      </TableCell>
      <TableCell
        className="w-1/8 max-w-[150px] truncate text-base overflow-ellipsis md:text-lg"
        title={data.status}
      >
        {data.status}
      </TableCell>
      <TableCell
        className="w-1/8 max-w-[150px] truncate text-base overflow-ellipsis md:text-lg"
        title={formatDateToString(data.startDate)}
      >
        {formatDateToString(data.startDate)}
      </TableCell>
      <TableCell
        className="w-1/8 max-w-[150px] truncate text-base overflow-ellipsis md:text-lg"
        title={formatDateToString(data.endDate)}
      >
        {formatDateToString(data.endDate)}
      </TableCell>
      <TableCell
        className="w-1/8 max-w-[150px] truncate text-base overflow-ellipsis md:text-lg"
        title={data.hours}
      >
        {data.hours}
      </TableCell>
      <TableCell className="w-1/8 max-w-[120px] truncate text-base overflow-ellipsis md:text-lg">
        <div className="flex">
          <Button
            asChild
            size="icon"
            variant="ghost"
            title="Editar evento"
            onClick={() => onDeleteEvent(data.id)}
          >
            <Link href={`${ROUTES.EVENTS_EDIT.url}/${data.id}`}>
              <Pencil size={20} />
            </Link>
          </Button>
          <Button
            size="icon"
            variant="ghost"
            title="Excluir evento"
            onClick={() => onDeleteEvent(data.id)}
          >
            <Trash size={20} />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            title="Arquivar evento"
            onClick={() => onArchiveEvent(data.id)}
          >
            <Archive size={20} />
          </Button>
        </div>
      </TableCell>
    </TableRow>
  );
}
