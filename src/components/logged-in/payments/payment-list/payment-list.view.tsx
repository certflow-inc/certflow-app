import { Payment } from '@/service/base/domain/payment';
import { PaymentListCards } from '../payment-list-cards';
import { PaymentListTable } from '../payment-list-table';

// TODO remover quando integrar com a api
const data: Payment[] = [
  {
    paymentId: '67e6ed26a55f340b4957f4e9',
    description: 'Pacote de boas vindas',
    provider: 'Mercado Pago',
    method: 'Crédito',
    status: 'Pago',
    amount: 0,
    observation: 'Bônus concedido durante a criação da sua conta. Aproveite.',
    createdAt: 1743187238990
    // approvedAt: 1743187238991,
  },
  {
    paymentId: '1',
    description: 'Descrição 1',
    provider: 'Mercado Pago',
    method: 'Crédito',
    status: 'Aprovado',
    amount: 20.99,
    observation: 'Observação 1',
    createdAt: 1743187238990
  },
  {
    paymentId: '2',
    description: 'Descrição 2',
    provider: 'Mercado Pago',
    method: 'Crédito',
    status: 'Aprovado',
    amount: 1000,
    observation: 'Observação 1',
    createdAt: 1743187238990
  },
  {
    paymentId: '3',
    description: 'Descrição 3',
    provider: 'Mercado Pago',
    method: 'Crédito',
    status: 'Aprovado',
    amount: 150.99,
    observation: 'Observação 1',
    createdAt: 1743187238990
  }
];

export function PaymentListView() {
  return (
    <section className="flex flex-col gap-6">
      <header className="flex items-center justify-between gap-2 px-2">
        <h1 className="flex flex-col gap-2 truncate font-semibold overflow-ellipsis text-slate-500 min-[1130px]:text-left lg:text-2xl">
          Pagamentos realizados
        </h1>
      </header>
      <div className="flex flex-col rounded-md bg-blue-100 p-1 min-[1130px]:bg-white min-[1130px]:p-1">
        <PaymentListTable data={data} />
        <PaymentListCards data={data} />
      </div>
    </section>
  );
}
