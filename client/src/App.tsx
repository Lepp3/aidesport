import { Outlet } from 'react-router';
import { UserProvider } from './contexts/UserContext/UserProvider';

export const App: React.FC = () => {
  return (
    <UserProvider>
      <Outlet />
    </UserProvider>
  );
};
