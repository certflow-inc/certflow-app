import { Check } from 'lucide-react';
import { PlanCardItemsViewProps } from './plan-card.types';

export function PlanCardItemsView({ items }: PlanCardItemsViewProps) {
  return (
    <ul className="mb-6 flex flex-col gap-2">
      {items.map(({ quantity, description }) => (
        <li key={description} className="flex items-center gap-3">
          <Check className="text-tertiary-600" size={20} />
          <span className="font-bold">{quantity}</span>
          <span>{description}</span>
        </li>
      ))}
    </ul>
  );
}
