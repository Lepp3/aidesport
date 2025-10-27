import { AppBar, Box, Toolbar } from '@mui/material';
import { Link } from 'react-router';
import { routes } from '../../../routes/routes';
import { UserMenu } from '../UserMenu/UserMenu';

export const NavBar: React.FC = () => {
  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Box component={Link} to={routes.home}>
            <img src="https://static.thenounproject.com/png/4778723-200.png" />
          </Box>
        </Toolbar>
        <Box component={Link} to={routes.home}>
          Find Sport
        </Box>
        <Box component={Link} to={routes.blog}>
          Blog
        </Box>
        <Box component={Link} to={routes.gallery}>
          Gallery
        </Box>
        <Box component={Link} to={routes.clubsAndCoaches}>
          Clubs and Coaches
        </Box>
        <Box component={Link} to={routes.about}>
          About us
        </Box>
        <UserMenu />
      </AppBar>
    </>
  );
};
