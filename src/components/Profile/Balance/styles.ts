import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    height: '100%',
  },
  box: {
    flex: '1 0 auto',
    width: '100%',
    height: 'calc(100% - 24px)',
    position: 'relative',
    zIndex: 1,
    // marginTop: 20,
    overflow: 'hidden',
    borderRadius: 10,
    background: 'var(--color-bg-default)',
    padding: '16px 24px 24px',
    border: '1px solid var(--color-bg-border)',
  },
});

export default useStyles;
