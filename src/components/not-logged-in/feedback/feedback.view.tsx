import { Button } from '@/components';
import { cn } from '@/lib/utils';
import Link from 'next/link';
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
  return (
    <div
      className={cn(
        'flex max-w-[1000px] flex-col items-center gap-10 px-4 md:px-10',
        className
      )}
      {...props}
    >
      <h1 className="text-center text-xl font-bold md:text-5xl">{title}</h1>
      <p className="text-center text-lg/relaxed md:text-3xl/relaxed">
        {description}
      </p>

      {destination && destinationLabel && (
        <Button asChild={true} size="lg">
          <Link href={destination ?? ''}>{destinationLabel}</Link>
        </Button>
      )}
    </div>
  );
}
