import { PaymentListCards } from '../payment-list-cards';
import { PaymentListTable } from '../payment-list-table';
import { PaymentListViewProps } from './payment-list.types';

export function PaymentListView({ data }: PaymentListViewProps) {
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
