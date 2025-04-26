'use client';

import { Card, CardContent } from '@/components/ui/card';
import { PaymentListCardViewProps } from './payment-list-card.types';

export function PaymentListCardView({ data }: PaymentListCardViewProps) {
  return (
    <Card className="border-0">
      <CardContent className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <p className="text-sm text-slate-500">Descrição</p>
          <p className="truncate text-base overflow-ellipsis">
            {data.description}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm text-slate-500">Provedor</p>
          <p className="line-clamp-1 text-base">{data.provider}</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm text-slate-500">Meio de pagamento</p>
          <p className="line-clamp-1 text-base">{data.method}</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm text-slate-500">Status</p>
          <p className="line-clamp-1 text-base">{data.status}</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm text-slate-500">Valor</p>
          <p className="line-clamp-1 text-base">
            {Number(data.amount).toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            })}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm text-slate-500">Criado em</p>
          <p className="line-clamp-1 text-base">
            {new Date(data.createdAt).toLocaleDateString('pt-BR')}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm text-slate-500">Observação</p>
          <p className="line-clamp-1 text-base">{data.observation}</p>
        </div>
      </CardContent>
    </Card>
  );
}
