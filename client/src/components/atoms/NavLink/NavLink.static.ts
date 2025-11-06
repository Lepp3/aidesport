import { type SxProps, type Theme } from '@mui/material';

export interface NavLinkProps {
  to: string;
  label?: string | React.ReactNode;
  img?: string;
  alt?: string;
  variant?: 'text' | 'button';
  sx?: SxProps<Theme>;
}
