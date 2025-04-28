import { NotLoggedIn } from '@/components';
import { Metadata } from 'next';

type SignupActivationPageProps = {
  params: Promise<{ token: string }>;
};

export const metadata: Metadata = {
  title: 'Ativação de conta'
};

export default async function SignupActivationPage({
  params
}: SignupActivationPageProps) {
  const { token } = await params;

  return <NotLoggedIn.SignupActivation token={token} />;
}
