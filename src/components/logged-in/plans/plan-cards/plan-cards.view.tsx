'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ROUTES } from '@/routes';
import { useRouter, useSearchParams } from 'next/navigation';
import { PlanCard } from '../plan-card';
import { PlanCardsViewProps } from './plan-cards.types';

export function PlanCardsView({ plans }: PlanCardsViewProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const openedTab = searchParams.get('tab') ?? 'combo';

  const comboPlans = plans
    .filter((plan) => plan.type === 'combo')
    .sort((item) => (item.isBestSeller ? -1 : 1));

  const singlePlans = plans
    .filter((plan) => plan.type === 'single')
    .sort((item) => (item.isBestSeller ? -1 : 1));

  return (
    <section className="flex flex-col items-center gap-6 py-4">
      <header className="flex items-center justify-between gap-2 px-2">
        <h1 className="flex max-w-[850px] flex-col gap-2 text-center text-xl/relaxed font-semibold text-slate-800 lg:text-3xl/relaxed">
          Aqui você pode adquirir combos para seus eventos ou pacotes de CertX
          para compra de novos itens.
        </h1>
      </header>

      <Tabs
        defaultValue={openedTab}
        className="flex w-full items-center gap-10"
      >
        <TabsList>
          <TabsTrigger
            value="combo"
            onClick={() => router.replace(`${ROUTES.PLANS.url}?tab=combo`)}
          >
            Combos
          </TabsTrigger>

          <TabsTrigger
            value="single"
            onClick={() => router.replace(`${ROUTES.PLANS.url}?tab=single`)}
          >
            Pacotes
          </TabsTrigger>
        </TabsList>

        <TabsContent value="combo">
          <ul className="mx-auto grid max-w-[1650px] grid-cols-1 gap-10 min-[1000px]:grid-cols-2 min-[1400px]:grid-cols-3 min-[1650px]:grid-cols-3">
            {comboPlans.map((plan) => (
              <li key={plan.id} className="flex justify-center">
                <PlanCard {...plan} />
              </li>
            ))}
          </ul>
        </TabsContent>

        <TabsContent value="single">
          <ul className="mx-auto grid max-w-[1650px] grid-cols-1 gap-10 min-[1000px]:grid-cols-2 min-[1400px]:grid-cols-3 min-[1650px]:grid-cols-3">
            {singlePlans.map((plan) => (
              <li key={plan.id} className="flex justify-center">
                <PlanCard {...plan} />
              </li>
            ))}
          </ul>
        </TabsContent>
      </Tabs>
    </section>
  );
}
