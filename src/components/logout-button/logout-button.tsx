'use client';

import { destroySession } from '@/lib/session';
import { ROUTES } from '@/routes';
import { LoaderCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Button } from '../ui/button';

export function LogoutButton() {
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);

  return (
    <Button
      onClick={() => {
        setIsProcessing(true);
        destroySession()
          .then(() => {
            router.push(ROUTES.SIGNIN);
          })
          .finally(() => {
            setIsProcessing(false);
          });
      }}
      disabled={isProcessing}
    >
      Sair
      {isProcessing && <LoaderCircle className="ml-2 h-4 w-4 animate-spin" />}
    </Button>
  );
}
