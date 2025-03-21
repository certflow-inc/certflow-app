import { NotLoggedIn } from '@/components';

type SignupActivationPageProps = {
  params: Promise<{ token: string }>;
};

export default async function SignupActivationPage({
  params
}: SignupActivationPageProps) {
  const { token } = await params;

  return <NotLoggedIn.SignupActivation token={token} />;
}
