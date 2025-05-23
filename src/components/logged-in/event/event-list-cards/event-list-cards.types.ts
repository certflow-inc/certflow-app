import { Event } from '@/domain';

export type EventListCardsViewProps = {
  data: Event[];
  onDeleteEvent: (eventId: string) => Promise<void>;
  onArchiveEvent: (eventId: string) => Promise<void>;
};
