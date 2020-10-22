import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  PropsWithChildren,
} from 'react';

import { storageKey } from '~/utils';

export type AuthState = {
  signed: boolean;
  username: string;
  answered: boolean;
};

export type AuthContext = {
  signed: boolean;
  username: string;
  answered: boolean;
  signIn(name: string): void;
  signOut(): void;
};

const AuthContext = createContext<AuthContext | null>(null);

const AuthProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [data, setData] = useState<AuthState>(() => {
    const storedData = localStorage.getItem(storageKey('userData'));

    if (storedData) {
      const userData = JSON.parse(storedData);

      return {
        signed: userData.signed,
        username: userData.username,
        answered: userData.answered,
      };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(name => {
    localStorage.setItem(
      storageKey('userData'),
      JSON.stringify({ signed: true, username: name, answered: false }),
    );
    setData({ signed: true, username: name, answered: false });
  }, []);

  const signOut = useCallback(() => {
    setData({} as AuthState);
    localStorage.removeItem(storageKey('userData'));
  }, []);

  const value = React.useMemo(
    () => ({
      signed: data.signed,
      username: data.username,
      answered: data.answered,
      signIn,
      signOut,
    }),
    [data, signIn, signOut],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = (): AuthContext => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(`useAuth must be used within an AuthProvider`);
  }

  return context;
};

export { AuthProvider, useAuth };
