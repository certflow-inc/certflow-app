'use client';

import { ProgressProvider as BProgressProvider } from '@bprogress/next/app';

export const ProgressProvider = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (
    <BProgressProvider
      height="8px"
      color="#2d91c7"
      options={{ showSpinner: false }}
      shallowRouting
    >
      {children}
    </BProgressProvider>
  );
};
