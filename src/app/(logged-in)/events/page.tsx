import { LoggedIn } from '@/components';

export default async function EventsPage() {
  return (
    <LoggedIn.Container>
      <LoggedIn.EventList />
    </LoggedIn.Container>
  );
}
