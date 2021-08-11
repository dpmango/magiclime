import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    position: 'relative',
  },
  row: {
    padding: '36px 0',
    borderBottom: '1px solid var(--color-bg-border)',
  },
  item: {
    flex: '0 0 192px',
    paddingRight: 24,
  },
});

export default useStyles;
