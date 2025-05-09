import { getPlansAction } from '@/actions/plans.action';
import { LoggedIn } from '@/components';
import { getAddress } from '@/components/logged-in/account/account-address/account-address.actions';

type CheckoutPageProps = {
  searchParams: Promise<{ [key: string]: string }>;
};

export default async function CheckoutPage({
  searchParams
}: CheckoutPageProps) {
  const { plan } = await searchParams;

  const plans = await getPlansAction();
  const selectecPlan = plans.find((currentPlan) => currentPlan.id === plan);

  const { data: addressData } = await getAddress();

  return (
    <LoggedIn.Container>
      <div className="flex h-full flex-1 flex-col gap-4 p-2">
        <div>
          <div>{selectecPlan?.title}</div>
          <div>{selectecPlan?.currentAmount}</div>
          <div>{selectecPlan?.originalAmount}</div>
          <div>{selectecPlan?.discountPercentage}</div>
        </div>
        <div>
          <div>{addressData?.address}</div>
          <div>{addressData?.country}</div>
          <div>{addressData?.state}</div>
          <div>{addressData?.city}</div>
          <div>{addressData?.number}</div>
          <div>{addressData?.district}</div>
        </div>
      </div>
    </LoggedIn.Container>
  );
}
