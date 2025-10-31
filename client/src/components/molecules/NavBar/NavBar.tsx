import { AppBar, Box, Toolbar } from '@mui/material';
import { Link } from 'react-router';
import { routes } from '../../../routes/routes';
import { NavLink } from '../../atoms/NavLink/NavLink';
import { UserMenu } from '../UserMenu/UserMenu';
import { navLinks } from './NavBar.static';
import { styles } from './NavBar.styles';

export const NavBar: React.FC = () => {
  return (
    <>
      <AppBar sx={styles.appBar}>
        <Toolbar>
          <Box component={Link} to={routes.home}>
            <img src="https://static.thenounproject.com/png/4778723-200.png" />
          </Box>
        </Toolbar>
        {navLinks.map(({ to, label, variant }) => (
          <NavLink key={to} to={to} label={label} variant={variant} />
        ))}
        <UserMenu />
      </AppBar>
    </>
  );
};
