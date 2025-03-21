import { Button } from '@/components/ui/button';
import { ActivateResponse } from '@/service/types';
import Link from 'next/link';
import { SIGNUP_ACTIVATION_FLOW } from './signup-activation.constants';
import { SignupActivationViewProps } from './signup-activation.types';

export async function SignupActivationView({
  action
}: SignupActivationViewProps) {
  const response = await action();

  const { title, description, destination, destinationLabel } = response.ok
    ? SIGNUP_ACTIVATION_FLOW.Ok
    : SIGNUP_ACTIVATION_FLOW[response.dataError?.error as ActivateResponse];

  return (
    <div className="flex max-w-[1000px] flex-1 flex-col items-center gap-12 px-4 lg:px-10">
      <h1 className="text-center text-2xl font-bold lg:text-4xl/relaxed">
        {title}
      </h1>

      <p
        data-visible={!!description}
        className="text-center text-xl/relaxed data-[visible=false]:hidden lg:text-2xl/relaxed"
      >
        {description}
      </p>

      <Button
        data-visible={!!destination}
        size="lg"
        className="data-[visible=false]:hidden"
        asChild
      >
        <Link href={destination ?? ''}>{destinationLabel}</Link>
      </Button>
    </div>
  );
}
