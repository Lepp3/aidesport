import { useEffect, useState, type Dispatch, type SetStateAction } from 'react';

export default function usePersistedState<T>(
  key: string,
  initial: T
): [T, Dispatch<SetStateAction<T>>] {
  const [state, setState] = useState<T>(() => {
    try {
      const user = localStorage.getItem(key);
      return user ? (JSON.parse(user) as T) : initial;
    } catch {
      return initial;
    }
  });

  useEffect(() => {
    try {
      const user = localStorage.getItem(key);
      setState(user ? (JSON.parse(user) as T) : initial);
    } catch {
      setState(initial);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return [state, setState];
}
