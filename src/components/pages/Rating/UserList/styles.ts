import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    position: 'relative',
  },
  card: {
    background: 'var(--color-bg-default)',
    border: '1px solid var(--color-bg-border)',
    borderRadius: 16,
    padding: '17px 24px',
    marginBottom: 8,
  },
  cardNumber: {
    flex: '0 0 8%',
    minWidth: 1,
    maxWidth: '8%',
  },
  cardUser: {
    flex: '0 0 35%',
    paddingRight: 24,
    minWidth: 1,
    maxWidth: '35%',
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
    flex: '0 0 37%',
    paddingRight: 24,
    minWidth: 1,
    maxWidth: '37%',
  },
  cardStat: {
    flex: '0 0 20%',
    minWidth: 1,
    maxWidth: '20%',
    marginLeft: 'auto',
  },
});

export default useStyles;
