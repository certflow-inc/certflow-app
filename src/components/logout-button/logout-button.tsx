'use client';

import { destroySession } from '@/lib/session';
import { ROUTES } from '@/routes';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';

export function LogoutButton() {
  const router = useRouter();
  return (
    <Button
      onClick={() => {
        destroySession();
        router.push(ROUTES.SIGNIN);
      }}
    >
      Logout
    </Button>
  );
}
