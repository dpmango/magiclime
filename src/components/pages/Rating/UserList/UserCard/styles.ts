import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  card: {
    background: 'var(--color-bg-default)',
    border: '1px solid var(--color-bg-border)',
    borderRadius: 16,
    padding: '17px 24px',
    marginBottom: 8,
  },
  cardNumber: {
    flex: '0 0 8%',
    maxWidth: '8%',
    minWidth: 1,

    paddingRight: 8,
  },
  cardUser: {
    flex: '0 0 55%',
    maxWidth: '55%',
    paddingRight: 24,
    minWidth: 1,
  },
  cardUserMain: {
    paddingLeft: 8,
    minWidth: 1,
  },
  cardAvatar: {
    flex: '0 0 54px',
    width: 54,
    height: 54,
    lineHeight: '54px',
  },
  cardUserName: {
    maxWidth: '100%',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    fontSize: 20,
  },
  cardLeague: {
    flex: '0 0 20%',
    maxWidth: '20%',
    paddingRight: 16,
    minWidth: 1,

    '& img': {
      maxWidth: 16,
    },
  },
  cardStat: {
    flex: '0 0 18%',
    maxWidth: '18%',
    minWidth: 1,
    paddingRight: 16,
  },
});

export default useStyles;
