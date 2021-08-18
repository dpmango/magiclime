import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    background: 'var(--color-bg-default)',
    border: '1px solid var(--color-bg-border)',
    borderRadius: 4,
    padding: 20,
    height: '100%',
  },
  coinIcon: {
    flex: '0 0 42px',
    paddingRight: 10,
    minWidth: 1,
    '& img': {
      width: '100%',
    },
  },
  coinContent: {
    flex: '1 1 auto',
    minWidth: 1,
  },
});

export default useStyles;
