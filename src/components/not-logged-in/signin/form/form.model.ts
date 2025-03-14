import { PRIVATE_ROUTES } from '@/routes';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { SIGNIN_FORM_SCHEMA } from './form.schema';
import { SigninFormData } from './form.types';

export function useFormModel() {
  const rotuer = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SigninFormData>({
    resolver: zodResolver(SIGNIN_FORM_SCHEMA)
  });

  const handleSigninSubmit = handleSubmit((data: SigninFormData) => {
    const { email, password } = data;

    // TODO chamar a action ou diretamente a api de login
    if (email === 'admin@email.com' && password === '123456') {
      rotuer.push(PRIVATE_ROUTES.DASHBOARD);
      return;
    }

    // TODO mostrar mensagem de erro
    alert('Usuário ou senha inválidos');
  });

  return {
    rotuer,
    register,
    handleSigninSubmit,
    errors
  };
}
