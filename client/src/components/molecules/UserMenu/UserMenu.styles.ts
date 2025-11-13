import { createStyles } from '../../../utils/createStyles';

export const styles = createStyles({
  outerBox: {
    display: 'flex',
    flexDirection: 'row',
    gap: '12px',
  },
  logoutButton: {
    textDecoration: 'none',
    alignItems: 'center',
    textAlign: 'center',
    py: 1,
    ':hover': {
      cursor: 'pointer',
    },
  },
});
