'use client';

import { useCallback, useEffect } from 'react';
import { signout } from './signout.actions';

export function SignoutView() {
  const logout = useCallback(async () => {
    await signout();
  }, []);

  useEffect(() => {
    logout();
  }, [logout]);

  return (
    <div className="flex-1">
      <h1 className="text-center text-lg font-bold md:text-2xl">
        Encerrando sessão...
      </h1>
    </div>
  );
}
