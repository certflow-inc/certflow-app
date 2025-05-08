'use server';

import { PlanCardViewProps } from '@/components/logged-in/plans/plan-card/plan-card.types';
import { SERVICE_MAP } from '@/dictionary/service.dict';
import { CertFlowServices } from '@/service';

type GetPlansActionResult = Omit<PlanCardViewProps, 'onSelect'>;

export async function getPlansAction(): Promise<GetPlansActionResult[]> {
  const response = await CertFlowServices.getPlans();

  if (!response.data) {
    return [];
  }

  const plans: GetPlansActionResult[] = response.data.map((plan) => ({
    id: plan.planId,
    title: plan.name,
    currency: plan.currency === 'real' ? 'R$' : 'CertX',
    originalAmount: plan.originalAmount,
    currentAmount: plan.currentAmount,
    discountPercentage: plan.discountPercentage,
    isBestSeller: plan.bestSeller,
    type: plan.type,
    items: Object.entries(plan.services).map(([service, quantity]) => ({
      quantity,
      description: SERVICE_MAP[service] ?? service
    }))
  }));

  return plans;
}
