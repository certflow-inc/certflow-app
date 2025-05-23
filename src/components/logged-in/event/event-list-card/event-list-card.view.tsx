import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { formatDateToString } from '@/utils/date-format.utils';
import { Archive, Pencil, Trash } from 'lucide-react';
import Link from 'next/link';
import { EventListCardViewProps } from './event-list-card.types';

export function EventListCardView({
  data,
  onDeleteEvent,
  onArchiveEvent
}: EventListCardViewProps) {
  return (
    <Card className="border-0">
      <CardContent className="flex flex-col gap-4">
        <Cell label="Nome" value={data.name} />
        <Cell label="Formato" value={data.format} />
        <Cell label="Tipo" value={data.type} />
        <Cell label="Status" value={data.status} />
        <Cell label="Início" value={formatDateToString(data.startDate)} />
        <Cell label="Término" value={formatDateToString(data.endDate)} />
        <Cell label="Duração" value={data.hours} />
      </CardContent>

      <CardFooter
        data-visible={true}
        className='hidden justify-center gap-8 border-t border-slate-200 data-[visible="true"]:flex'
      >
        <Link href={`/event/${data.id}/edit`}>
          <Pencil size={20} />
        </Link>
        <button
          data-visible={true}
          className='hidden data-[visible="true"]:block'
          onClick={() => onDeleteEvent(data.id)}
        >
          <Trash size={20} />
        </button>
        <button
          data-visible={true}
          className='hidden data-[visible="true"]:block'
          onClick={() => onArchiveEvent(data.id)}
        >
          <Archive size={20} />
        </button>
      </CardFooter>
    </Card>
  );
}

function Cell({
  label,
  value,
  children
}: {
  label: string;
  value?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col justify-start gap-2">
      <p className="text-sm text-slate-500">{label}</p>
      <p
        data-show={!!value}
        className="line-clamp-1 hidden text-base data-[show=true]:block"
      >
        {value}
      </p>

      {!!children && children}
    </div>
  );
}
