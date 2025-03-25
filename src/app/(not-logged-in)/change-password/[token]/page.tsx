import { NotLoggedIn } from '@/components';
import { checkRecovery } from '@/components/not-logged-in/change-password/change-password.actions';
import { CHECK_RECOVERY_FLOW } from '@/components/not-logged-in/change-password/change-password.constants';
import { CheckResponse } from '@/service/types';
import { IntegrationFlow } from '@/types';

type ChangePasswordPageProps = {
  params: Promise<{ token: string }>;
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
