import { PUBLIC_ROUTES } from '@/routes';
import { redirect } from 'next/navigation';

export default function EntryPointPage() {
  return redirect(PUBLIC_ROUTES.SIGNIN);
}
