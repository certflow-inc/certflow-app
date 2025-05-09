import { getPlansAction } from '@/actions/plans.action';
import { CheckoutSummaryViewProps } from './checkout-summary.types';

export async function CheckoutSummaryView({
  planId
}: CheckoutSummaryViewProps) {
  const plans = await getPlansAction();
  const selectecPlan = plans.find((currentPlan) => currentPlan.id === planId);

  return (
    <div>
      <div>{selectecPlan?.title}</div>
      <div>{selectecPlan?.currentAmount}</div>
      <div>{selectecPlan?.originalAmount}</div>
      <div>{selectecPlan?.discountPercentage}</div>
    </div>
  );
}
