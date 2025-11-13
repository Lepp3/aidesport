import { AppBar, Toolbar } from '@mui/material';
import { routes } from '../../../routes/routes';
import { NavLink } from '../../atoms/NavLink/NavLink';
import { SiteNavigation } from '../SiteNavigation/SiteNavigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { styles } from './NavBar.styles';

export const NavBar: React.FC = () => {
  return (
    <AppBar sx={styles.appBar}>
      <Toolbar sx={styles.toolBar}>
        <NavLink
          to={routes.home}
          variant="text"
          img="https://static.thenounproject.com/png/4778723-200.png"
          alt="siteLogo"
        />
        <SiteNavigation />
        <UserMenu />
      </Toolbar>
    </AppBar>
  );
};
