'use client';

import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { PaymentListRowView } from '../payment-list-row/payment-list-row.view';
import { PaymentListTableViewProps } from './payment-list-table.types';

export function PaymentListTableView({ data }: PaymentListTableViewProps) {
  const [expandedId, setIsExpandedId] = useState<string | null>(null);

  return (
    <Table className="hidden min-[1130px]:block">
      <TableCaption>Pagamentos realizados</TableCaption>

      <TableHeader>
        <TableRow>
          <TableHead className="w-1/4 max-w-[250px] text-slate-500">
            Descrição
          </TableHead>
          <TableHead className="w-1/4 max-w-[250px] text-slate-500">
            Provedor
          </TableHead>
          <TableHead className="w-1/5 max-w-[250px] text-slate-500">
            Meio de pagamento
          </TableHead>
          <TableHead className="w-1/5 max-w-[150px] text-slate-500">
            Status
          </TableHead>
          <TableHead className="w-1/5 max-w-[150px] text-right text-slate-500">
            Valor
          </TableHead>
          <TableHead className="w-1/5 max-w-[80px]">
            <ChevronDown size={26} className="invisible" />
          </TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {data.map((payment) => (
          <PaymentListRowView
            key={payment.paymentId}
            data={payment}
            expandedId={expandedId}
            onExpandRow={setIsExpandedId}
            isExpandOnRowClick
          />
        ))}
      </TableBody>
    </Table>
  );
}
