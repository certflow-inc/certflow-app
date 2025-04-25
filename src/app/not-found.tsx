'use client';

import { Button, NoData, NotLoggedIn } from '@/components';
import { ROUTES } from '@/routes';
import { useRouter } from 'next/navigation';

export default function AccountNotFoundPage() {
  const router = useRouter();
  return (
    <NotLoggedIn.Container>
      <NoData message="Página não encontrada." showLogo>
        <Button size="lg" onClick={() => router.push(ROUTES.DASHBOARD.url)}>
          Voltar para o Dashboard
        </Button>
      </NoData>
    </NotLoggedIn.Container>
  );
}
