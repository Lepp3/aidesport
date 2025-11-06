import { Box } from '@mui/material';
import type React from 'react';
import { Outlet } from 'react-router';
import { NavBar } from '../molecules/NavBar/NavBar';

export const Layout: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <NavBar />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>
    </Box>
  );
};
