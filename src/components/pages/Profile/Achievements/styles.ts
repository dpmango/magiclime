import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    height: '100%',
  },
  box: {
    flex: '1 0 auto',
    width: '100%',
    position: 'relative',
    zIndex: 1,
    marginTop: 20,
    overflow: 'hidden',
    borderRadius: 10,
    background: 'var(--color-bg-default)',
    padding: 24,
    border: '1px solid var(--color-bg-border)',
  },
  boxList: {
    flex: '1 0 auto',
  },
  boxCta: {},

  group: {
    paddingBottom: 24,
    paddingTop: 24,
    borderBottom: '1px solid var(--color-bg-border)',
    '&:first-child': {
      paddingTop: 0,
    },
    '&:last-child': {
      borderBottom: 0,
    },
  },
  groupImage: {
    flex: '0 0 80px',
    minHeight: 80,
    background: 'var(--color-bg-secondary)',
    fontSize: 0,
    '& img': {
      height: '100%',
      objectFit: 'cover',
      width: '100%',
    },
  },
  groupContent: {
    width: '100%',
    paddingLeft: 16,
  },
  groupTitle: {
    width: 'auto',
    paddingRight: 12,
  },
  groupStats: {
    background: 'var(--color-bg-system)',
    borderRadius: '50px',
    marginLeft: 'auto',
    padding: '4px 8px',
  },
  achievement: {
    marginTop: 12,
    '& .Text': {
      fontSize: 14,
    },
  },
  achievementIcon: {
    flex: '0 0 auto',
    width: 16,
    height: 16,
    marginRight: 7,
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    background: 'var(--color-bg-system)',
    color: 'var(--color-typo-secondary)',
    '& .Icon': {
      height: 10,
    },
    '&.compleated': {
      background: 'var(--color-bg-success)',
      color: 'var(--color-bg-default)',
    },
  },
});

export default useStyles;
