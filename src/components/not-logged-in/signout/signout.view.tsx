'use client';

import { destroySession } from '@/lib/session';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export function SignoutView() {
  const router = useRouter();

  useEffect(() => {
    destroySession();
    router.push('/');
  }, [router]);

  return <div className="flex-1">Encerrando sessão...</div>;
}
