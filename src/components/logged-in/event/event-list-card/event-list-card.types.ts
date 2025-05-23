import { Event } from '@/domain';

export type EventListCardViewProps = {
  data: Event;
  onDeleteEvent: (eventId: string) => Promise<void>;
  onArchiveEvent: (eventId: string) => Promise<void>;
};
