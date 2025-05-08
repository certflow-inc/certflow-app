import { LoggedIn } from '@/components';
import { PlanCards } from '@/components/logged-in/plans';
import {
  PlanCardItem,
  PlanCardViewProps
} from '@/components/logged-in/plans/plan-card/plan-card.types';

// TODO remover após consumir os dados do backend
const services: PlanCardItem[] = [
  {
    quantity: 1,
    description: 'evento'
  },
  {
    quantity: 20,
    description: 'créditos'
  },
  {
    quantity: 1,
    description: 'modelo de certificado'
  },
  {
    quantity: 1,
    description: 'assinatura'
  }
];

// TODO remover após consumir os dados do backend
const plans: Omit<PlanCardViewProps, 'onSelect'>[] = [
  {
    id: '1',
    title: 'Evento Pequeno',
    currency: 'R$',
    originalAmount: 39.99,
    currentAmount: 39.99,
    discountPercentage: 0,
    items: services
  },
  {
    id: '2',
    title: 'Evento Médio',
    currency: 'R$',
    originalAmount: 69.99,
    currentAmount: 49.99,
    discountPercentage: 10,
    items: [
      ...services,
      { quantity: 1, description: 'usuário adicional' },
      { quantity: 1, description: 'acompanhamento' }
    ],

    isBestSeller: true
  },
  {
    id: '3',
    title: 'Evento Grande',
    currency: 'R$',
    originalAmount: 99.99,
    currentAmount: 79.99,
    discountPercentage: 0,
    items: services
  },
  {
    id: '4',
    title: 'Evento 1',
    currency: 'R$',
    originalAmount: 199.99,
    currentAmount: 159.99,
    discountPercentage: 30,
    items: services
  },
  {
    id: '5',
    title: 'Usuário adicional',
    currency: 'CertX',
    originalAmount: 40,
    currentAmount: 20,
    discountPercentage: 50,
    items: services
  },
  {
    id: '6',
    title: 'Pacote 30 Créditos',
    currency: 'R$',
    originalAmount: 399.99,
    currentAmount: 349.99,
    discountPercentage: 50,
    items: services
  },
  {
    id: '7',
    title: 'Pacote 50 Créditos',
    currency: 'R$',
    originalAmount: 499.99,
    currentAmount: 249.99,
    discountPercentage: 60,
    items: services
  }
];

export default function PlansPage() {
  return (
    <LoggedIn.Container>
      <div className="flex h-full flex-1 flex-col gap-4 p-2">
        <PlanCards plans={plans} />
      </div>
    </LoggedIn.Container>
  );
}
