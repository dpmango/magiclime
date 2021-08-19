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
    marginBottom: 16,
  },
  cardAvatar: {
    flex: '0 0 165px',
    '& img': {
      width: '100%',
    },
  },
  cardContent: {
    flex: '1 1 auto',
    paddingLeft: 24,
  },
  cardMain: {
    flex: '0 0 37.5%',
    maxWidth: '37.5%',
    paddingRight: 24,
    borderRight: '1px solid var(--color-bg-border)',
  },
  cardStats: {
    flex: '0 0 62.5%',
    maxWidth: '62.5%',
    paddingLeft: 24,
  },
  cardStatsCol: {
    flex: '0 0 33.33%',
    maxWidth: '33.33%',
  },
  cardMembers: {
    marginTop: 8,
  },
  cardLast: {
    paddingTop: 16,
    marginTop: 16,
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
