import { NotLoggedIn } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cadastro'
};

export default function SignupPage() {
  return <NotLoggedIn.Signup />;
}
