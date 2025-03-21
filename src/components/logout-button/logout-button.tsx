'use client';

import { destroySession } from '@/lib/session';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';

export function LogoutButton() {
  const router = useRouter();
  return (
    <Button
      onClick={() => {
        destroySession();
        router.push('/');
      }}
    >
      Logout
    </Button>
  );
}
