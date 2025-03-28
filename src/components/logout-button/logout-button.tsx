import { ROUTES } from '@/routes';
import { redirect } from 'next/navigation';
import { Button } from '../ui/button';

export function LogoutButton() {
  async function exit() {
    'use server';
    redirect(ROUTES.SIGNOUT);
  }

  return (
    <form action={exit}>
      <Button type="submit">Sair</Button>
    </form>
  );
}
