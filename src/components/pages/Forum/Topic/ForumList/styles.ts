import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    position: 'relative',
  },
  card: {
    background: 'var(--color-bg-default)',
    border: '1px solid var(--color-bg-border)',
    borderRadius: 16,
    padding: 24,
    marginBottom: 12,
  },
  cardAvatar: {
    flex: '0 0 80px',
    paddingRight: 16,
    '& .Avatar': {
      width: 64,
      height: 64,
      lineHeight: '64px',
    },
  },
  cardContent: {
    flex: '1 1 auto',
  },
  cardMeta: {
    flex: '0 0 auto',
  },
});

export default useStyles;
