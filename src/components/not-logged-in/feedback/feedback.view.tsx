import { Button } from '@/components';
import Link from 'next/link';

type FeedbackViewProps = {
  title: string;
  description: string;
  destination?: string;
  destinationLabel?: string;
};

export function FeedbackView({
  title,
  description,
  destination,
  destinationLabel
}: FeedbackViewProps) {
  return (
    <div className="flex max-w-[1000px] flex-col items-center gap-10 px-4 md:px-10">
      <h1 className="text-center text-5xl">{title}</h1>
      <p className="text-center text-3xl/relaxed">{description}</p>

      {destination && destinationLabel && (
        <Button asChild={true} size="lg">
          <Link href={destination ?? ''}>{destinationLabel}</Link>
        </Button>
      )}
    </div>
  );
}
