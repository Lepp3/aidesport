import { NavLink } from '../../atoms/NavLink/NavLink';
import { navLinks } from './SiteNavigation.static';

export const SiteNavigation: React.FC = () => {
  return (
    <>
      {navLinks.map(({ to, label, variant }) => (
        <NavLink key={to} to={to} label={label} variant={variant} />
      ))}
    </>
  );
};
