import { routes } from '../../../routes/routes';
import { type NavLinkProps } from '../../atoms/NavLink/NavLink.static';

export const navLinks: NavLinkProps[] = [
  { label: 'Find sport', to: routes.home },
  { label: 'Blog', to: routes.blog },
  { label: 'Gallery', to: routes.gallery },
  { label: 'Clubs & Coaches', to: routes.clubsAndCoaches },
  { label: 'About us', to: routes.about },
];
