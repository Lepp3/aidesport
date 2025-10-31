import { Box } from '@mui/material';
import { Link } from 'react-router';
import { type NavLinkProps } from './NavLink.static';
import { styles } from './NavLink.styles';

export const NavLink: React.FC<NavLinkProps> = ({
  to,
  label,
  variant = 'text',
  sx = {},
}) => {
  return (
    <Box
      component={Link}
      to={to}
      sx={{
        ...(variant === 'button' && styles.button),
        ...(variant === 'text' && styles.base),
        ...sx,
      }}
    >
      {label && <span>{label}</span>}
    </Box>
  );
};
