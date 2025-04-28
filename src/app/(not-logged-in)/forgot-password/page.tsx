import { NotLoggedIn } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trocar senha'
};

export default function ForgotPasswordPage() {
  return <NotLoggedIn.ForgotPassword />;
}
