import { Event } from '@/domain';

export type EventListTableViewProps = {
  data: Event[];
  onDeleteEvent: (eventId: string) => Promise<void>;
  onArchiveEvent: (eventId: string) => Promise<void>;
};
