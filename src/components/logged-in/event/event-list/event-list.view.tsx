'use client';

import { EventListCards } from '../event-list-cards';
import { EventListTable } from '../event-lista-table';
import { useEventListModel } from './event-list.model';
import { EventListViewProps } from './event-list.types';

export function EventListView({ data }: EventListViewProps) {
  const { handleDeleteEvent, handleArchiveEvent } = useEventListModel();

  return (
    <section className="flex flex-col gap-6 py-4">
      <header className="flex items-center justify-between gap-2 px-2">
        <h1 className="flex flex-col gap-2 truncate font-semibold overflow-ellipsis text-slate-500 min-[1130px]:text-left lg:text-2xl">
          Meus Eventos
        </h1>
      </header>

      <div className="flex flex-col rounded-md bg-blue-100 p-1 min-[1130px]:bg-white min-[1130px]:p-1">
        <EventListTable
          data={data}
          onDeleteEvent={handleDeleteEvent}
          onArchiveEvent={handleArchiveEvent}
        />
        <EventListCards
          data={data}
          onDeleteEvent={handleDeleteEvent}
          onArchiveEvent={handleArchiveEvent}
        />
      </div>
    </section>
  );
}
