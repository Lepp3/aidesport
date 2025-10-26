import type { SxProps, Theme } from '@mui/material';

export const createStyles = <T extends Record<string, SxProps<Theme>>>(
  styles: T
): T => {
  return styles;
};
