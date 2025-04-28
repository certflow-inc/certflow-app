import { NotLoggedIn } from '@/components';
import { checkRecovery } from '@/components/not-logged-in/change-password/change-password.actions';
import { CHECK_RECOVERY_FLOW } from '@/components/not-logged-in/change-password/change-password.constants';
import { CheckResponse } from '@/service/base/types';
import { IntegrationFlow } from '@/types';
import { Metadata } from 'next';

type ChangePasswordPageProps = {
  params: Promise<{ token: string }>;
};

export const metadata: Metadata = {
  title: 'Trocar senha confirmação'
};

export default async function ChangePasswordPage({
  params
}: ChangePasswordPageProps) {
  const { token } = await params;
  const response = await checkRecovery(token);

  const checkTokenResult: IntegrationFlow | null = response.ok
    ? null
    : CHECK_RECOVERY_FLOW[response.dataError?.error as CheckResponse];

  return <NotLoggedIn.ChangePassword checkTokenResult={checkTokenResult} />;
}
