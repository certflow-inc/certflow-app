'use client';

import { Card, CardContent } from '@/components/ui/card';
import { PaymentListCardViewProps } from './payment-list-card.types';

export function PaymentListCardView({
  data,
  onPaymentClick
}: PaymentListCardViewProps) {
  const isPix = data.method === 'PIX';
  const isPending = data.status === 'Pendente';

  return (
    <Card className="border-0">
      <CardContent className="flex flex-col gap-4">
        <Cell label="Descrição" value={data.description} />
        <Cell label="Provedor" value={data.provider} />
        <Cell label="Meio de pagamento" value={data.method} />
        <Cell label="Status" value={data.status} />
        <Cell label="Valor" value={data.amount} />
        <Cell label="Criado em" value={data.createdAt} />
        <Cell label="Observação" value={data.observation} />
        <Cell label="Observação" value={data.observation} />

        {isPix && isPending && (
          <Cell label="Pagar">
            <button
              className="text-primary-500 w-full text-left font-bold underline"
              onClick={() => {
                console.log('onPaymentClick', data.transactionId);
                onPaymentClick(data.transactionId);
              }}
            >
              clique aqui para gerar o QR Code
            </button>
          </Cell>
        )}
      </CardContent>
    </Card>
  );
}

function Cell({
  label,
  value,
  children
}: {
  label: string;
  value?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col justify-start gap-2">
      <p className="text-sm text-slate-500">{label}</p>
      <p
        data-show={!!value}
        className="line-clamp-1 hidden text-base data-[show=true]:block"
      >
        {value}
      </p>

      {!!children && children}
    </div>
  );
}
