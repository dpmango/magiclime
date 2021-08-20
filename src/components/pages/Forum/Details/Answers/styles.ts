import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    position: 'relative',
  },
  box: {
    border: '1px solid var(--color-bg-border)',
    borderRadius: 10,
    padding: 24,
    marginBottom: 16,
  },
  boxAuthor: {
    flex: '0 0 auto',
    '& .Avatar': {
      width: 36,
      height: 36,
      lineHeight: '36px',
      flex: '0 0 36px',
    },
  },
  boxContent: {
    paddingTop: 16,
    marginTop: 16,
    borderTop: '1px solid var(--color-bg-border)',
  },
});

export default useStyles;
