import { ROUTES } from '@/routes';
import Link from 'next/link';
import { Button } from '../ui/button';

export function LogoutButton() {
  return (
    <Button asChild>
      <Link href={ROUTES.SIGNOUT}>Sair</Link>
    </Button>
  );
}
