import { notFound } from 'next/navigation';
import { getEventsAction } from './event-list.actions';
import { EventListView } from './event-list.view';

export async function EventListViewModel() {
  const events = await getEventsAction();

  if (!events || events.length === 0) {
    return notFound();
  }

  return <EventListView data={events} />;
}
