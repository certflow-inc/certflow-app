'use client';

import { CertFlowServices } from '@/service/base';
import { Me } from '@/service/base/domain/me';
import {
  ComponentProps,
  createContext,
  useContext,
  useEffect,
  useState
} from 'react';

type SessionContextDef = {
  user: Me | undefined;
};

type SessionProviderProps = ComponentProps<'div'>;

const SessionContext = createContext<SessionContextDef | null>(null);

const useAppSession = () => {
  const context = useContext(SessionContext);

  if (!context) {
    throw new Error(
      'useSessionProvider must be used within a SessionProvider.'
    );
  }

  return context;
};

const SessionProvider = ({ children }: SessionProviderProps) => {
  const [user, setUser] = useState<Me | undefined>();

  const loadUser = async () => {
    const response = await CertFlowServices.getMe();

    if (response.ok) {
      setUser(response.data);
    }
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <SessionContext.Provider value={{ user }}>
      {children}
    </SessionContext.Provider>
  );
};

export { SessionProvider, useAppSession };
