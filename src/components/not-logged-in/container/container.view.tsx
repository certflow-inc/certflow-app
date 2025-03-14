import { cn } from '@/lib/utils';
import { ContainerViewProps } from './container.types';

export function ContainerView({
  children,
  className,
  ...props
}: ContainerViewProps) {
  return (
    <main className={cn('h-dvh pt-12', className)} {...props}>
      <div className="relative flex min-h-[calc(100vh-48px)] flex-col items-center gap-12">
        {children}
      </div>
    </main>
  );
}
