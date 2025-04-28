import { NotLoggedIn } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Confirmação de ativação de conta'
};

export default function ActivationRequestPage() {
  return <NotLoggedIn.ActivationRequest />;
}
