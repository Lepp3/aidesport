import { type ReactNode, useCallback } from 'react';
import usePersistedState from '../../hooks/usePersistedState';
import { UserContext } from './UserContext';
import { type UserContextValue, type UserData } from './UserContext.static';

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [authData, setAuthData] = usePersistedState<UserData>('auth', {});

  const userLoginHandler = useCallback(
    (data: UserData) => {
      setAuthData(data);
      localStorage.setItem('auth', JSON.stringify(data));
    },
    [setAuthData]
  );

  const userLogoutHandler = useCallback(() => {
    setAuthData({});
    localStorage.removeItem('auth');
  }, [setAuthData]);

  const value: UserContextValue = {
    authData,
    userLoginHandler,
    userLogoutHandler,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
