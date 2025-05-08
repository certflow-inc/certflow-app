import { PlanCardViewProps } from '../plan-card/plan-card.types';

export type PlanCardsViewProps = {
  plans: Omit<PlanCardViewProps, 'onSelect'>[];
};
