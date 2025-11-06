import { Box } from '@mui/material';
import { routes } from '../../../routes/routes';
import { NavLink } from '../../atoms/NavLink/NavLink';

export const UserMenu: React.FC = () => {
  return (
    <>
      <NavLink to={routes.login} label="Login" />
      <NavLink to={routes.register} label="Register" />
      <NavLink to={routes.profile} label="Profile" />
      <Box onClick={() => console.log('Create a logout function')}>Logout</Box>
    </>
  );
};
