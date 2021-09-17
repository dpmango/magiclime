import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    position: 'relative',
  },
  card: {
    position: 'relative',
    background: 'var(--color-bg-default)',
    borderTop: '1px solid var(--color-bg-border)',
    padding: '16px 0',
    '&.head': {
      borderTop: 0,
      padding: '8px 0',
    },
    '&:last-child': {
      borderBottom: '1px solid var(--color-bg-border)',
    },
    '&:hover': {
      background: 'var(--color-bg-secondary)',
    },
    '@media screen and (max-width: 639px)': {
      padding: '18px 12px',
      flexWrap: 'wrap',
    },
  },

  cardTitle: {
    flex: '0 0 calc(100% - 160px - 140px - 140px)',
    maxWidth: 'calc(100% - 160px - 140px - 140px)',
    paddingRight: 24,
    minWidth: 1,
    '& $Typography': {
      whiteSpace: 'nowrap',
      maxWidth: '100%',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
    },
  },
  cardUserTitle: {
    whiteSpace: 'nowrap',
    maxWidth: '100%',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
  cardUser: {
    flex: '0 0 160px',
    maxWidth: '160px',
    paddingRight: 16,
    '@media screen and (max-width: 768px)': {
      flex: '0 0 100px',
      paddingRight: 12,
    },
    '& .Avatar': {
      flex: '0 0 auto',
    },
  },
  cardUnread: {
    flex: '0 0 70px',
    maxWidth: 70,
    paddingRight: 8,
  },
  cardViews: {
    flex: '0 0 100px',
    maxWidth: 100,
    paddingRight: 8,
  },
  cardDate: {
    flex: '0 0 140px',
    maxWidth: '140px',
  },
});

export default useStyles;
