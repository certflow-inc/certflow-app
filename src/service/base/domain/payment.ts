export type Payment = {
  paymentId: string;
  description: string;
  provider: string;
  method: string;
  status: string;
  amount: number;
  observation: string;
  createdAt: number;
};
