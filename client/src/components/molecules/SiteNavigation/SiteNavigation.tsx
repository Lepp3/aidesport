import { Box } from '@mui/material';
import { NavLink } from '../../atoms/NavLink/NavLink';
import { navLinks } from './SiteNavigation.static';
import { styles } from './SiteNavigation.styles';

export const SiteNavigation: React.FC = () => {
  return (
    <Box sx={styles.outerBox}>
      {navLinks.map(({ to, label, variant }) => (
        <NavLink key={to} to={to} label={label} variant={variant} />
      ))}
    </Box>
  );
};
