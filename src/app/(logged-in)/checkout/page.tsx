import { LoggedIn } from '@/components';

type CheckoutPageProps = {
  searchParams: Promise<{ [key: string]: string }>;
};

export default async function CheckoutPage({
  searchParams
}: CheckoutPageProps) {
  const { plan } = await searchParams;

  return (
    <LoggedIn.Container>
      <div className="flex h-full flex-1 flex-col gap-4 p-2">
        <LoggedIn.Checkout planId={plan} />
      </div>
    </LoggedIn.Container>
  );
}
