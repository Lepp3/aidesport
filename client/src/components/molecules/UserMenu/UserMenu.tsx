import { Box } from '@mui/material';
import { routes } from '../../../routes/routes';
import { NavLink } from '../../atoms/NavLink/NavLink';
import { styles } from './UserMenu.styles';

export const UserMenu: React.FC = () => {
  return (
    <Box sx={styles.outerBox}>
      <NavLink to={routes.login} label="Login" />
      <NavLink to={routes.register} label="Register" />
      <NavLink to={routes.profile} label="Profile" />
      <Box
        sx={styles.logoutButton}
        onClick={() => console.log('Create a logout function')}
      >
        Logout
      </Box>
    </Box>
  );
};
