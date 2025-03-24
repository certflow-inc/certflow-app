'use client';

import { Button } from '@/components';
import { cn } from '@/lib/utils';
import { usePathname, useRouter } from 'next/navigation';
import { ComponentProps } from 'react';

type FeedbackViewProps = ComponentProps<'div'> & {
  title: string;
  description: string;
  destination?: string;
  destinationLabel?: string;
};

export function FeedbackView({
  title,
  description,
  destination,
  destinationLabel,
  className,
  ...props
}: FeedbackViewProps) {
  const router = useRouter();
  const pathName = usePathname();

  const handleButtonClick = () => {
    if (
      pathName === destination ||
      (!!destination && pathName.includes(destination))
    ) {
      window.location.reload();
      return;
    }
    router.push(destination ?? '');
  };

  return (
    <div
      className={cn(
        'flex max-w-[1000px] flex-col items-center gap-10 px-4 md:px-10',
        className
      )}
      {...props}
    >
      <h1 className="text-center text-xl/relaxed font-bold md:text-5xl/relaxed">
        {title}
      </h1>
      <p className="text-center text-lg/relaxed md:text-3xl/relaxed">
        {description}
      </p>

      {destination && destinationLabel && (
        <Button size="lg" onClick={handleButtonClick}>
          {destinationLabel}
        </Button>
      )}
    </div>
  );
}
