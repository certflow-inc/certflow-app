import { SignupActivation } from '@/components/not-logged-in';
import { Suspense } from 'react';

type SignupActivationPageProps = {
  params: Promise<{ token: string }>;
};

export default async function SignupActivationPage({
  params
}: SignupActivationPageProps) {
  const { token } = await params;

  return (
    <Suspense fallback={<SignupActivation.Skeleton />}>
      <SignupActivation.View token={token} />
    </Suspense>
  );
}
