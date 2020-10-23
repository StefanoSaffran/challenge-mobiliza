import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  PropsWithChildren,
} from 'react';

import { storageKey } from '~/utils';

type User = {
  id?: string;
  username: string;
};

export type AuthState = {
  signed: boolean;
  user: User;
  answered: boolean;
};

export type AuthContext = {
  signed: boolean;
  user: User;
  answered: boolean;
  signIn(name: string): void;
  signOut(): void;
  addUserID(id: string): void;
};

const AuthContext = createContext<AuthContext | null>(null);

const AuthProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [data, setData] = useState<AuthState>(() => {
    const storedData = localStorage.getItem(storageKey('userData'));

    if (storedData) {
      const userData = JSON.parse(storedData);

      return {
        signed: userData.signed,
        user: {
          id: userData.user.id,
          username: userData.user.username,
        },
        answered: userData.answered,
      };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(name => {
    localStorage.setItem(
      storageKey('userData'),
      JSON.stringify({
        signed: true,
        user: { username: name },
        answered: false,
      }),
    );
    setData({ signed: true, user: { username: name }, answered: false });
  }, []);

  const signOut = useCallback(() => {
    setData({} as AuthState);
    localStorage.removeItem(storageKey('userData'));
  }, []);

  const addUserID = useCallback(
    id => {
      localStorage.setItem(
        storageKey('userData'),
        JSON.stringify({
          signed: true,
          user: { ...data.user, id },
          answered: true,
        }),
      );
      setData({ signed: true, user: { ...data.user, id }, answered: true });
    },
    [data.user],
  );

  const value = React.useMemo(
    () => ({
      signed: data.signed,
      user: data.user,
      answered: data.answered,
      signIn,
      signOut,
      addUserID,
    }),
    [data, signIn, signOut, addUserID],
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
