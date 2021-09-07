import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    position: 'relative',
  },
  content: {
    marginTop: 36,
  },
  card: {
    background: 'var(--color-bg-default)',
    border: '1px solid var(--color-bg-border)',
    borderRadius: 16,
    padding: 24,
    marginBottom: 16,
  },
  cardContent: {
    '@media screen and (max-width: 1279px)': {
      flexWrap: 'wrap',
    },
  },
  cardAvatar: {
    flex: '0 0 165px',
    padding: 12,
    '& img': {
      width: '100%',
    },
    '@media screen and (max-width: 639px)': {
      flexBasis: '80px',
      padding: 0,
    },
  },
  cardMain: {
    width: 'auto',
    flex: '0 0 calc(42.5% - (165px / 2))',
    minWidth: 1,
    paddingRight: 24,
    paddingLeft: 24,
    paddingTop: 8,
    borderRight: '1px solid var(--color-bg-border)',
    '@media screen and (max-width: 1279px)': {
      flexBasis: 'calc(100% - 165px)',
      borderRight: 0,
      paddingRight: 0,
    },
    '@media screen and (max-width: 639px)': {
      flexBasis: 'calc(100% - 80px)',
    },
    '@media screen and (max-width: 479px)': {
      flexBasis: '100%',
      padding: '16px 0',
      borderBottom: '1px solid var(--color-bg-border)',
    },
  },
  cardMeta: {
    width: 'auto',
    flex: '0 0 calc(57.5% - (165px / 2))',
    minWidth: 1,
    paddingLeft: 24,
    paddingTop: 16,
    '@media screen and (max-width: 1279px)': {
      flexBasis: '100%',
      maxWidth: '100%',
      paddingLeft: 0,
      paddingTop: 4,
    },
  },
  cardStats: {
    maxWidth: 360,
  },
  cardStatsCol: {
    flex: '0 0 33.33%',
    '@media screen and (max-width: 1279px)': {
      paddingTop: 12,
      flexBasis: '100%',
    },
  },
  cardMembers: {
    marginTop: 8,
  },
  cardLast: {
    paddingTop: 16,
    marginTop: 12,
    borderTop: '1px solid var(--color-bg-border)',
  },
  cardLastAvatar: {
    flex: '0 0 auto',
    width: 'auto',
  },
  cardLastContent: {
    position: 'relative',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    maxWidth: '100%',
    minWidth: 1,
  },
});

export default useStyles;
