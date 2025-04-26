'use client';

import { Card, CardContent } from '@/components/ui/card';
import { PaymentListCardViewProps } from './payment-list-card.types';

export function PaymentListCardView({ data }: PaymentListCardViewProps) {
  return (
    <Card className="border-0">
      <CardContent className="flex flex-col gap-4">
        <Cell label="Descrição" value={data.description} />
        <Cell label="Provedor" value={data.provider} />
        <Cell label="Meio de pagamento" value={data.method} />
        <Cell label="Status" value={data.status} />
        <Cell
          label="Valor"
          value={Number(data.amount).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          })}
        />
        <Cell
          label="Criado em"
          value={new Date(data.createdAt).toLocaleDateString('pt-BR')}
        />
        <Cell label="Observação" value={data.observation} />
      </CardContent>
    </Card>
  );
}

function Cell({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm text-slate-500">{label}</p>
      <p className="line-clamp-1 text-base">{value}</p>
    </div>
  );
}
