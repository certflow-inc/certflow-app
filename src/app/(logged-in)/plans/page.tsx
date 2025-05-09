import { getPlansAction } from '@/actions/plans.action';
import { LoggedIn } from '@/components';
import { notFound } from 'next/navigation';

export default async function PlansPage() {
  const plans = await getPlansAction();

  if (!plans.length) {
    return notFound();
  }

  return (
    <LoggedIn.Container>
      <div className="flex h-full flex-1 flex-col gap-4 p-2">
        <LoggedIn.Plans plans={plans} />
      </div>
    </LoggedIn.Container>
  );
}
