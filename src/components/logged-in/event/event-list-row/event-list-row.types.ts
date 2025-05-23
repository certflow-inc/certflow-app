import { Event } from '@/domain';

export type EventListRowViewProps = {
  data: Event;
  onDeleteEvent: (eventId: string) => Promise<void>;
  onArchiveEvent: (eventId: string) => Promise<void>;
};
