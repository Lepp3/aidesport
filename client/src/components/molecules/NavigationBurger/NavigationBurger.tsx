import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Drawer, IconButton, Stack } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from '../../atoms/NavLink/NavLink';
import { navLinks } from '../SiteNavigation/SiteNavigation.static';

export const NavigationBurger: React.FC = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (value: boolean) => () => {
    setOpen(value);
  };

  return (
    <>
      <IconButton
        edge="end"
        color="inherit"
        aria-label="open navigation menu"
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>

      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <Box width={280} role="presentation" p={2}>
          <Stack direction="row" justifyContent="flex-end" mb={2}>
            <IconButton
              aria-label="close navigation menu"
              onClick={toggleDrawer(false)}
            >
              <CloseIcon />
            </IconButton>
          </Stack>

          <Stack spacing={2}>
            {navLinks.map(({ to, label, variant }) => (
              <NavLink
                key={to}
                to={to}
                label={label}
                variant={variant}
                onClick={toggleDrawer(false)}
              />
            ))}
          </Stack>
        </Box>
      </Drawer>
    </>
  );
};
