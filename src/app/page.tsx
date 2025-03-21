import { ROUTES } from '@/routes';
import { redirect } from 'next/navigation';

export default function EntryPointPage() {
  return redirect(ROUTES.SIGNIN);
}
