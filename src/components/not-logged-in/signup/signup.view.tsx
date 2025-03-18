'use client';

import { Register } from '@/types/register';
import { useState } from 'react';
import { Feedback } from '../feedback';
import { SignupForm } from './form';
import { SignupViewProps } from './signup.types';

type SignupResponse = 'ok' | 'Account already registered';

// TODO refatorar, pensar em algo centralizado para tratamento dos retornos dos endpoints
type SignupFlow = {
  title: string;
  description: string;
  destination?: string;
  destinationLabel?: string;
};

// TODO refatorar, pensar em algo centralizado para tratamento dos retornos dos endpoints
const SIGNUP_FLOW: Record<SignupResponse, SignupFlow> = {
  ok: {
    title: 'Um email foi enviado para você!',
    description:
      'Verifique sua caixa de mensagens, encontre o email enviado e clique no link existente para ativar a sua conta.',
    destination: '/signin',
    destinationLabel: 'Voltar para tela de login'
  },
  'Account already registered': {
    title: 'Conta já cadastrada',
    description:
      'O email informado já foi cadastrado para outra conta. Caso seja você, clique no link de redefinição de senha para redefinir a sua senha.',
    destination: '/signin',
    destinationLabel: 'Voltar para tela de login'
  }
};

export function SignupView({ action }: SignupViewProps) {
  const [signupResult, setSignupResult] = useState<SignupFlow | null>(null);

  const handleSignupSubmit = async (data: Register) => {
    const response = await action(data);

    if (response.status === 'ok') {
      return setSignupResult(SIGNUP_FLOW.ok);
    }

    setSignupResult(SIGNUP_FLOW[response.error?.message as SignupResponse]);
  };

  if (signupResult) {
    return <Feedback {...signupResult} />;
  }

  return <SignupForm onSignupSubmit={handleSignupSubmit} className="flex-1" />;
}
