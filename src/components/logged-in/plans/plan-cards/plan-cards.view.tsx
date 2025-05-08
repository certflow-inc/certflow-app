'use client';

import { PlanCard } from '../plan-card';
import { PlanCardsViewProps } from './plan-cards.types';

export function PlanCardsView({ plans }: PlanCardsViewProps) {
  const handleSelectPlan = (id: string) => {
    console.log(id);
  };

  return (
    <ul className="mx-auto grid max-w-[1650px] grid-cols-1 gap-10 min-[1000px]:grid-cols-2 min-[1400px]:grid-cols-3 min-[1650px]:grid-cols-3">
      {plans.map((plan) => (
        <li key={plan.id} className="flex justify-center">
          <PlanCard {...plan} onSelect={handleSelectPlan} />
        </li>
      ))}
    </ul>
  );
}
