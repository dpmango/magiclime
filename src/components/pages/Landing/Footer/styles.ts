import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    padding: '32px 0',
    borderTop: '1px solid var(--color-bg-border)',
  },
  first: {
    maxWidth: 340,
  },
  menu: {
    marginTop: 16,
    '& a': {
      display: 'block',
    },
  },
});

export default useStyles;
