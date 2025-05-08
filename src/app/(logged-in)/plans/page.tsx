import { getPlansAction } from '@/actions/plans.action';
import { LoggedIn } from '@/components';
import { PlanCards } from '@/components/logged-in/plans';
import { notFound } from 'next/navigation';

export default async function PlansPage() {
  const plans = await getPlansAction();

  if (!plans.length) {
    return notFound();
  }

  return (
    <LoggedIn.Container>
      <div className="flex h-full flex-1 flex-col gap-4 p-2">
        <PlanCards plans={plans} />
      </div>
    </LoggedIn.Container>
  );
}
