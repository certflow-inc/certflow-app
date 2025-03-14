import { PUBLIC_ROUTES } from '@/routes';
import { useRouter } from 'next/navigation';

export function useSignupFormModel() {
  const router = useRouter();

  const backToLoginPage = () => {
    router.push(PUBLIC_ROUTES.SIGNIN);
  };

  return {
    backToLoginPage
  };
}
