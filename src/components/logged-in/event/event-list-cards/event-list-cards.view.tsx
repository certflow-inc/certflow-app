import { EventListCard } from '../event-list-card';
import { EventListCardsViewProps } from './event-list-cards.types';

export function EventListCardsView({
  data,
  onDeleteEvent,
  onArchiveEvent
}: EventListCardsViewProps) {
  return (
    <div className="flex flex-col gap-8 min-[1130px]:hidden">
      {data.map((event) => (
        <EventListCard
          key={event.id}
          data={event}
          onDeleteEvent={onDeleteEvent}
          onArchiveEvent={onArchiveEvent}
        />
      ))}
    </div>
  );
}
