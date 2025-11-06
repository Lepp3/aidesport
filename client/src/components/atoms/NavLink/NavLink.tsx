import { Box } from '@mui/material';
import { Link } from 'react-router';
import { type NavLinkProps } from './NavLink.static';
import { styles } from './NavLink.styles';

export const NavLink: React.FC<NavLinkProps> = ({
  to,
  label,
  img,
  alt,
  variant = 'text',
  sx = {
    color: 'inherit',
    textDecoration: 'none',
  },
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
      {img ? (
        <img
          src={img}
          alt={alt}
          style={{ maxHeight: '100px', maxWidth: '100px', display: 'block' }}
        />
      ) : (
        label && <span>{label}</span>
      )}
    </Box>
  );
};
