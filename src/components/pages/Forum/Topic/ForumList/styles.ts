import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    position: 'relative',
  },
  card: {
    position: 'relative',
    background: 'var(--color-bg-default)',
    border: '1px solid var(--color-bg-border)',
    borderRadius: 16,
    padding: 24,
    marginBottom: 12,
    '@media screen and (max-width: 639px)': {
      padding: '18px 12px',
      flexWrap: 'wrap',
    },
  },
  cardAvatar: {
    flex: '0 0 80px',
    paddingRight: 16,
    '@media screen and (max-width: 768px)': {
      flex: '0 0 60px',
      paddingRight: 12,
    },
    '& .Avatar': {
      width: 64,
      height: 64,
      lineHeight: '64px',
      fontSize: 18,
      '@media screen and (max-width: 768px)': {
        width: 48,
        height: 48,
        lineHeight: '48px',
        fontSize: 14,
      },
    },
  },
  cardContent: {
    flex: '1 1 auto',
    paddingRight: 24,
    '@media screen and (max-width: 639px)': {
      paddingTop: 12,
    },
  },
  cardMeta: {
    flex: '0 0 auto',
    '@media screen and (max-width: 639px)': {
      position: 'absolute',
      top: 18,
      right: 18,
    },
  },
});

export default useStyles;
