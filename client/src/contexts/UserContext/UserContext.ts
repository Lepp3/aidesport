import { createContext, useContext } from 'react';
import { type UserContextValue } from './UserContext.static';

export const UserContext = createContext<UserContextValue | undefined>(
  undefined
);

export const useUser = () => {
  const ctx = useContext(UserContext);
  if (!ctx) {
    throw new Error('useUser must be used within UserProvider');
  }

  return ctx;
};
