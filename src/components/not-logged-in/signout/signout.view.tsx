'use client';

import { useProgress } from '@bprogress/react';
import { useCallback, useEffect } from 'react';
import { signout } from './signout.actions';

export function SignoutView() {
  const { start } = useProgress();

  const logout = useCallback(async () => {
    await signout();
  }, []);

  useEffect(() => {
    start();
    logout();
  }, [logout, start]);

  return (
    <div className="flex-1">
      <h1 className="text-center text-lg font-bold md:text-2xl">
        Encerrando sessão...
      </h1>
    </div>
  );
}
