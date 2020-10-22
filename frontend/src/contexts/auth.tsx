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
};

export type AuthContext = {
  signed: boolean;
  username: string;
  signIn(name: string): void;
  signOut(): void;
};

const AuthContext = createContext<AuthContext | null>(null);

const AuthProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [data, setData] = useState<AuthState>(() => {
    const storedUser = localStorage.getItem(storageKey('user'));

    if (storedUser) {
      const userName = JSON.parse(storedUser);

      return {
        signed: true,
        username: userName,
      };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(name => {
    localStorage.setItem(storageKey('username'), JSON.stringify(name));
    setData({ signed: true, username: name });
  }, []);

  const signOut = useCallback(() => {
    setData({} as AuthState);
    localStorage.removeItem(storageKey('user'));
  }, []);

  const value = React.useMemo(
    () => ({
      signed: data.signed,
      username: data.username,
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
